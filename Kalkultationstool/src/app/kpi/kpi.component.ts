import { Component, OnInit } from '@angular/core';
import {BackendService} from "../Services/backend.service";
import {NavigationService} from "../Services/navigation.service";
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent {

  navigationStep: number;
  language;
  selectedId;

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

  efficiencyIsBad = false;

  constructor(private backendService: BackendService,
              private translationService: TranslationService,
              private navigationService: NavigationService) {

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
    this.navigationService.isNavigationChanged(0);
  }

  updateValues(){

    this.productiveTimeAc = this.JSONData.results.result[0].general[0].productivetime[0].$.current;
    this.productiveTimeAv = this.JSONData.results.result[0].general[0].productivetime[0].$.average;

    this.efficiencyAc = this.JSONData.results.result[0].general[0].effiency[0].$.current;
    this.efficiencyAv = this.JSONData.results.result[0].general[0].effiency[0].$.average;

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

    if(parseInt(this.efficiencyAc.replace('%','')) < 90){
      this.efficiencyIsBad = true;
    }
  }
}
