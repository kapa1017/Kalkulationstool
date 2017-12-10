import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  JSONData: any;

  productiveTimeAc: number;

  efficiencyAc: string;

  idleTimeAc: number;

  idleTimeCostsAc: number;

  storeValueAc: number;

  storageCostsAc: number;

  profitAc: number;

  constructor(backendService: BackendService) {
    backendService.getData().subscribe((data: any) => {
      this.JSONData = data;
      this.updateValues();
    });
  }

  updateValues(){

    this.productiveTimeAc = this.JSONData.results.result[0].general[0].productivetime[0].$.current;

    this.efficiencyAc = this.JSONData.results.result[0].general[0].effiency[0].$.current;

    this.idleTimeAc = this.JSONData.results.result[0].general[0].idletime[0].$.current;

    this.idleTimeCostsAc = this.JSONData.results.result[0].general[0].idletimecosts[0].$.current;

    this.storeValueAc = this.JSONData.results.result[0].general[0].storevalue[0].$.current;

    this.storageCostsAc = this.JSONData.results.result[0].general[0].storagecosts[0].$.current;

    this.profitAc = this.JSONData.results.result[0].summary[0].profit[0].$.current;

  }
}
