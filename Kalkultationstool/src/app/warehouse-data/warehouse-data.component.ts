import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';

@Component({
  selector: 'app-warehouse-data',
  templateUrl: './warehouse-data.component.html',
  styleUrls: ['./warehouse-data.component.css']
})
export class WarehouseDataComponent {

  JSONData: any;

  article = [];

  constructor(backendService: BackendService) {
    backendService.getData().subscribe((data: any) => {
      this.JSONData = data;
      this.updateValues();
    });
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
