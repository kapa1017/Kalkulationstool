import { Component} from '@angular/core';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";
import {BackendService} from "../Services/backend.service";
import {NavigationService} from "../Services/navigation.service";
import {OrderService} from "../Services/order.service";

@Component({
  selector: 'app-order-calculation-step2',
  templateUrl: './order-calculation-step2.component.html',
  styleUrls: ['./order-calculation-step2.component.css']
})
export class OrderCalculationStep2Component {

  language;
  JSONData;
  navigationStep;

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

  goToLastStep(){
    this.navigationService.isNavigationChanged(6);
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  export(){
    this.navigationService.isNavigationChanged(0);
  }
}
