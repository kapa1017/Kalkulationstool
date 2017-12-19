import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {NavigationService} from "../Services/navigation.service";
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  navigationStep: number;
  language;
  selectedId;

  JSONData: any;

  productiveTimeAc: number;

  efficiencyAc: string;

  idleTimeAc: number;

  idleTimeCostsAc: number;

  storeValueAc: number;

  storageCostsAc: number;

  profitAc: number;

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
    this.navigationService.isNavigationChanged(0)
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
