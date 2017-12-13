import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {OrderService} from '../Services/order.service';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";

@Component({
  selector: 'app-order-calculation',
  templateUrl: './order-calculation.component.html',
  styleUrls: ['./order-calculation.component.css']
})
export class OrderCalculationComponent {

  JSONData: any;
  language;
  orders: any;

  orderstarted2: any;

  productionProgram: number[];

  constructor(private backendService: BackendService,
              private translationService: TranslationService,
              private orderService: OrderService) {
    backendService.getData().subscribe((data: Object) => {
      this.JSONData = data;
    });
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }
}
