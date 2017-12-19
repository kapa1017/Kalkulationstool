import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {OrderService} from '../Services/order.service';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";
import {NavigationService} from "../Services/navigation.service";
import {PrognoseService} from "../Services/prognose.service";

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

  p1 = {per1: 0, per2: 0, per3:0, per4: 0};
  p2 = {per1: 0, per2: 0, per3:0, per4: 0};
  p3 = {per1: 0, per2: 0, per3:0, per4: 0};

  prognose = [this.p1, this.p2, this.p3];

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
  }

  goToNextStep(){
    this.prognoseService.prognoseChanged(this.prognose);
    this.navigationService.isNavigationChanged(7);
  }

  goToLastStep(){
    this.navigationService.isNavigationChanged(5);
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }
}
