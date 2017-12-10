import { Component, OnInit } from '@angular/core';
import {BackendService} from "../Services/backend.service";

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent {

  JSONData: any;
  result: any;

  productiveTimeAc: number;
  productiveTimeAv: number;

  efficiencyAc: string;
  efficiencyAv: string;

  idleTimeAc: number;
  idleTimeAv: number;

  idleTimeCostsAc: number;
  idleTimeCostsAv: number;

  storeValueAc: number;
  storeValueAv: number;

  storageCostsAc: number;
  storageCostsAv: number;

  profitAc: number;
  profitAv: number;
  profitAll: number;

  constructor(backendService: BackendService) {
    backendService.getData().subscribe((data: any) => {
      this.JSONData = data;
      this.updateValues();
    });
  }

  updateValues(){

    this.productiveTimeAc = this.JSONData.results.result[0].general[0].productivetime[0].$.current;
    this.productiveTimeAv = this.JSONData.results.result[0].general[0].productivetime[0].$.average;

    debugger;

    this.efficiencyAc = this.JSONData.results.result[0].general[0].effiency[0].$.current;
    this.efficiencyAv = this.JSONData.results.result[0].general[0].effiency[0].$.average;

    debugger;

    this.idleTimeAc = this.JSONData.results.result[0].general[0].idletime[0].$.current;
    this.idleTimeAv = this.JSONData.results.result[0].general[0].idletime[0].$.average;

    this.idleTimeCostsAc = this.JSONData.results.result[0].general[0].idletimecosts[0].$.current;
    this.idleTimeCostsAv = this.JSONData.results.result[0].general[0].idletimecosts[0].$.average;

    this.storeValueAc = this.JSONData.results.result[0].general[0].storevalue[0].$.current;
    this.storeValueAv = this.JSONData.results.result[0].general[0].storevalue[0].$.average;

    this.storageCostsAc = this.JSONData.results.result[0].general[0].storagecosts[0].$.current;
    this.storageCostsAv = this.JSONData.results.result[0].general[0].storagecosts[0].$.average;

    this.profitAc = this.JSONData.results.result[0].summary[0].profit[0].$.current;
    this.profitAv = this.JSONData.results.result[0].summary[0].profit[0].$.average;
    this.profitAll = this.JSONData.results.result[0].summary[0].profit[0].$.all;

  }
}
