import { Component, OnInit } from '@angular/core';
import {BackendService} from "../Services/backend.service";
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions} from "@angular/http";
import {NavigationService} from "../Services/navigation.service";

@Component({
  selector: 'app-xml-selector',
  templateUrl: './xml-selector.component.html',
  styleUrls: ['./xml-selector.component.css']
})
export class XmlSelectorComponent {

  items:any;

  constructor(private http: Http,
              private backendService: BackendService,
              private navigationService: NavigationService) {
    backendService.getAllFiles().subscribe((res: Object[]) => {
      this.items = res;
    })
  }

  select(item){
    this.backendService.idChanged(item._id);
    this.navigationService.isNavigationChanged(0);
  }

  upload(event){
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
}
