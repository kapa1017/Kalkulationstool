import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {getTranslation} from './Utils/Translations';
import {TranslationService} from './Services/translation.service';
import {InitService} from './Services/init.service';
import {NavigationService} from './Services/navigation.service';
import {DomSanitizer} from "@angular/platform-browser";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BackendService} from "./Services/backend.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }


  navigationStep = 0;
  selectedId
  language;
  data = {};
  xmlBase64;

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  constructor( private http: Http,
              private translationService: TranslationService,
              private backendService: BackendService,
              private navigationService: NavigationService
  ) {
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
    backendService.selectedId$.subscribe((newState: String) => {
      this.selectedId = newState;
    });

    if(this.selectedId == ''){
      navigationService.isNavigationChanged(9);
    }

    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
  }

  uploadFile(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('xmlData', file, file.name);
      formData.append('titel', 'Testtitel')
      let headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      this.http.post('http://localhost:3000/element', formData, <RequestOptions>{ headers: headers })
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        )
    }
  }

  clickWareHouse(){
    this.navigationService.isNavigationChanged(10);
  }

  clickKpi(newState: boolean){
    this.navigationService.isNavigationChanged(11);
  }

  clickResult(newState: boolean){
    this.navigationService.isNavigationChanged(12);
  }

  startCalculation() {
    this.navigationService.isNavigationChanged(1);
  }

  changeLanguage(newLang){
    this.translationService.isLanguageChanged(newLang);
  }
}
