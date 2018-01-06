import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TranslationService} from "./translation.service";
import {getTranslation} from "app/Utils/Translations";

@Injectable()
export class NavigationService {

  language;

  private navigationSource = new BehaviorSubject<number>(0);
  isNavigation$ = this.navigationSource.asObservable();

  constructor(private translationService: TranslationService){
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
  }

  isNavigationChanged(newState: number) {
    this.navigationSource.next(newState);
    this.setDynamicHeader(newState);
  }

  setDynamicHeader(newState: number){
    switch(newState){
      case 0 :
        document.getElementById('toolHeader').innerText = 'Ultra krass kalkulierendes Kalkulationstool';
        break;
      case 1:
        document.getElementById('toolHeader').innerText = getTranslation('header1', this.language);
        break;
      case 2:
        document.getElementById('toolHeader').innerText = getTranslation('header2', this.language);
        break;
      case 3:
        document.getElementById('toolHeader').innerText = getTranslation('header3', this.language);
        break;
      case 4:
        document.getElementById('toolHeader').innerText = getTranslation('header4', this.language);
        break;
      case 5:
        document.getElementById('toolHeader').innerText = getTranslation('header5', this.language);
        break;
      case 6:
        document.getElementById('toolHeader').innerText = getTranslation('header6', this.language);
        break;
      case 7:
        document.getElementById('toolHeader').innerText = getTranslation('header7', this.language);
        break;
      case 10:
        document.getElementById('toolHeader').innerText = getTranslation('header8', this.language);
        break;
      case 11:
        document.getElementById('toolHeader').innerText = getTranslation('header9' , this.language);
        break;
      case 12:
        document.getElementById('toolHeader').innerText = 'KPI\'s ';
        break;
    }
  }
}

