import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {NavigationService} from "../Services/navigation.service";

@Component({
  selector: 'app-warehouse-data',
  templateUrl: './warehouse-data.component.html',
  styleUrls: ['./warehouse-data.component.css']
})
export class WarehouseDataComponent {

  navigationStep:number;
  JSONData: any;

  article = [];

  constructor(private backendService: BackendService,
              private navigationService: NavigationService) {
    backendService.getData().subscribe((data: any) => {
      this.JSONData = data;
      this.updateValues();
    });
    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
  }


  goToLastStep(){
    this.navigationService.isNavigationChanged(0)
  }

  updateValues(){
    this.JSONData.results.warehousestock[0].article.forEach((el) => {
       this.article.push({
         id: el.$.id,
         pct: el.$.pct,
         amount: el.$.amount,
         stockvalue: el.$.stockvalue,
       });
    });
  }
}
