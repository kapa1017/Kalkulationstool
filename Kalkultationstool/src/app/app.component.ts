import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import {getTranslation} from './Utils/Translations';
import {TranslationService} from "./Services/translation.service";
import {ResultService} from "./Services/result.service";
import {InitService} from "./Services/init.service";
import {NavigationService} from "./Services/navigation.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navigationStep = 0;
  isInit = false;
  language;
  data = {};
  result: any;

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  constructor(
              private initService: InitService,
              private resultService: ResultService,
              private translationService: TranslationService,
              private navigationService: NavigationService
  ) {
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
    resultService.isResultStarted$.subscribe((result: boolean) => {
      this.result = result;
    });
    initService.isInit$.subscribe((init: boolean) => {
      this.isInit = init;
    });
    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
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
