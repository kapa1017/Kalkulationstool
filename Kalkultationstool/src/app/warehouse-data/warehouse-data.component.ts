import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {NavigationService} from "../Services/navigation.service";
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";

@Component({
  selector: 'app-warehouse-data',
  templateUrl: './warehouse-data.component.html',
  styleUrls: ['./warehouse-data.component.css']
})
export class WarehouseDataComponent {

  navigationStep:number;
  JSONData: any;
  selectedId;
  language;

  article = [];

  constructor(private backendService: BackendService,
              private navigationService: NavigationService,
              private translationService: TranslationService) {
    backendService.selectedId$.subscribe((newState: String) => {
      this.selectedId = newState
    });
    backendService.getData(this.selectedId).subscribe((data: any) => {
      this.JSONData = data;
      this.updateValues();
    });
    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  goToLastStep(){
    this.navigationService.isNavigationChanged(0)
  }

  updateValues(){
    this.JSONData.results.warehousestock[0].article.forEach((el) => {
       this.article.push({
         id: el.dollardollar.id,
         pct: el.dollardollar.pct,
         amount: el.dollardollar.amount,
         stockvalue: el.dollardollar.stockvalue,
       });
    });
  }
}
