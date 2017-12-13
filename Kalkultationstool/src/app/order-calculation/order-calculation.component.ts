import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {OrderService} from '../Services/order.service';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";
import {NavigationService} from "../Services/navigation.service";

@Component({
  selector: 'app-order-calculation',
  templateUrl: './order-calculation.component.html',
  styleUrls: ['./order-calculation.component.css']
})
export class OrderCalculationComponent {

  JSONData: any;
  language;
  navigationStep;
  orders: any;

  orderstarted2: any;

  productionProgram: number[];

  constructor(private backendService: BackendService,
              private translationService: TranslationService,
              private navigationService: NavigationService,
              private orderService: OrderService) {
    backendService.getData().subscribe((data: Object) => {
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
    this.navigationService.isNavigationChanged(7);
  }

  goToLastStep(){
    this.navigationService.isNavigationChanged(5);
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }
}
