import { Component } from '@angular/core';
import {StartService} from './Services/start.service';
import 'rxjs/add/operator/map';
import {StepTwoService} from "./Services/stepTwo.service";
import {StepThreeService} from "./Services/stepThree.service";
import {AuftraegeService} from "./Services/auftraege.service";
import {StepFourService} from "./Services/stepFour.service";
import {getTranslation} from './Utils/Translations';
import {PrioService} from "./Services/prio.service";
import {TranslationService} from "./Services/translation.service";
import {WarehouseService} from "app/Services/warehouse.service";
import {ResultService} from "./Services/result.service";
import {KpiService} from "./Services/kpi.service";
import {InitService} from "./Services/init.service";
import {OrderService} from "./Services/order.service";
import {NavigationService} from "./Services/navigation.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isStarted = false;
  isStepTwo = false;
  isStepThree = false;
  isStepFour = false;
  isWarehouse = false;
  orderStarted = false;
  orderStarted2 = false;
  isResult = false;

  navigationStep = 0;

  // muss wieder auf true gesetzt werden!
  isInit = false;

  isKpi = false;

  language;

  isPrio = false;

  data = {};
  result: any;

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  constructor(private startService: StartService,
              private stepTwoService: StepTwoService,
              private orderService: OrderService,
              private stepThreeService: StepThreeService,
              private stepFourService: StepFourService,
              private initService: InitService,
              private warehouseService: WarehouseService,
              private auftraegeService: AuftraegeService,
              private prioService: PrioService,
              private resultService: ResultService,
              private kpiService: KpiService,
              private translationService: TranslationService,
              private navigationService: NavigationService
  ) {
    startService.isStarted$.subscribe((isStarted: boolean) => {
      this.isStarted = isStarted;
    });
    stepTwoService.isStepTwo$.subscribe((isStepTwo: boolean) => {
      this.isStepTwo = isStepTwo;
    });
    stepThreeService.isStepThree$.subscribe((isStepThree: boolean) => {
      this.isStepThree = isStepThree;
    });
    stepFourService.isStepFour$.subscribe((isStepFour: boolean) => {
      this.isStepFour = isStepFour;
    });
    prioService.isPrio$.subscribe((isPrio: boolean) => {
      this.isPrio = isPrio;
    });
    warehouseService.isWwarehouseStarted$.subscribe((newState: boolean) => {
      this.isWarehouse = newState;
    });
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
    resultService.isResultStarted$.subscribe((result: boolean) => {
      this.result = result;
    });
    kpiService.isKpiStarted$.subscribe((kpi: boolean) => {
      this.isKpi = kpi;
    });
    initService.isInit$.subscribe((init: boolean) => {
      this.isInit = init;
    });
    orderService.orderStarted$.subscribe((newState: boolean) => {
      this.orderStarted = newState;
    });
    orderService.orderStarted2$.subscribe((newState: boolean) => {
      this.orderStarted2 = newState;
    });

    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
  }

  clickWareHouse(){
    this.navigationService.isNavigationChanged(10);
  }

  clickKpi(newState: boolean){
    this.navigationService.isNavigationChanged(11);
  }

  clickResult(newState: boolean){
    this.navigationService.isNavigationChanged(12);
  }

  startCalculation() {
    this.navigationService.isNavigationChanged(1);
  }

  changeLanguage(newLang){
    this.translationService.isLanguageChanged(newLang);
  }
}
