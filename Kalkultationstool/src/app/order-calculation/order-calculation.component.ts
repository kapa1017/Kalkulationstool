import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {OrderService} from '../Services/order.service';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";
import {NavigationService} from "../Services/navigation.service";
import {PrognoseService} from "../Services/prognose.service";
import has = Reflect.has;

@Component({
  selector: 'app-order-calculation',
  templateUrl: './order-calculation.component.html',
  styleUrls: ['./order-calculation.component.css']
})
export class OrderCalculationComponent {

  JSONData: any;
  language;
  navigationStep;
  selectedId;

  prognose;

  constructor(private backendService: BackendService,
              private translationService: TranslationService,
              private prognoseService: PrognoseService,
              private navigationService: NavigationService) {
    backendService.selectedId$.subscribe((newState: String) => {
      this.selectedId = newState
    });
    backendService.getData(this.selectedId).subscribe((data: Object) => {
      this.JSONData = data;
    });
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
    prognoseService.prognose$.subscribe((newState: Object[]) => {
      this.prognose = newState;
    })

  }

  goToNextStep(){

    var values = Array.from(document.getElementsByTagName('input'));
    var hasWrongValues = false;

    values.forEach(el => {
      if(parseInt(el.value) < 0){
        hasWrongValues = true;
      }
    });

    if(hasWrongValues){
      alert('Sie haben falsche Werte in ihrer Prognose')
    }else{
      this.prognoseService.prognoseChanged(this.prognose);
      this.navigationService.isNavigationChanged(7);
    }
  }

  goToLastStep(){
    this.navigationService.isNavigationChanged(5);
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }
}
