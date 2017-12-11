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
  isResult = false;

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
              private translationService: TranslationService
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
  }

  clickWareHouse(newState: boolean){
    this.warehouseService.isWarehouseChanged(newState);
  }

  clickKpi(newState: boolean){
    this.kpiService.isKpiChanged(newState);
  }

  clickResult(newState: boolean){
    this.resultService.isResultChanged(newState);
  }

  startCalculation() {
    if (this.isStarted === false) {
      this.startService.isStartedChanged(true);
    }
  }

  goToNextStep(){

    if(this.isStepTwo === false && this.isStarted === true) {

      this.stepTwoService.isStepTwoChanged(true);
      this.startService.isStartedChanged(false);

      //Werte P1 abspeichern

      this.auftraegeService.auftraegeP1changed({
        P1: (<HTMLInputElement>document.getElementById('P1')).value,

        E26: (<HTMLInputElement>document.getElementById('E26')).value,
        E51: (<HTMLInputElement>document.getElementById('E51')).value,

        E16: (<HTMLInputElement>document.getElementById('E16')).value,
        E17: (<HTMLInputElement>document.getElementById('E17')).value,
        E50: (<HTMLInputElement>document.getElementById('E50')).value,

        E4: (<HTMLInputElement>document.getElementById('E4')).value,
        E10:(<HTMLInputElement> document.getElementById('E10')).value,
        E49:  (<HTMLInputElement>document.getElementById('E49')).value,

        E7:  (<HTMLInputElement>document.getElementById('E7')).value,
        E13: (<HTMLInputElement> document.getElementById('E13')).value,
        E18:  (<HTMLInputElement>document.getElementById('E18')).value
      });

    }else if(this.isStepThree === false && this.isStepTwo === true && this.isStarted === false){

      this.stepThreeService.isStepThreeChanged(true);
      this.stepTwoService.isStepTwoChanged(false);

      //Werte P2 abspeichern

      this.auftraegeService.auftraegeP2changed({
        P2: (<HTMLInputElement>document.getElementById('P2')).value,

        E26: (<HTMLInputElement>document.getElementById('E26')).value,
        E56: (<HTMLInputElement>document.getElementById('E56')).value,

        E16: (<HTMLInputElement>document.getElementById('E16')).value,
        E17: (<HTMLInputElement>document.getElementById('E17')).value,
        E55: (<HTMLInputElement>document.getElementById('E55')).value,

        E5: (<HTMLInputElement>document.getElementById('E5')).value,
        E11: (<HTMLInputElement> document.getElementById('E11')).value,
        E54:  (<HTMLInputElement>document.getElementById('E54')).value,

        E8:  (<HTMLInputElement>document.getElementById('E8')).value,
        E14: (<HTMLInputElement> document.getElementById('E14')).value,
        E19:  (<HTMLInputElement>document.getElementById('E19')).value
      });


    }else if(this.isStepThree === true && this.isStepTwo === false && this.isStarted === false){

      //Werte P3 abspeichern

      this.auftraegeService.auftraegeP3changed({

        P3: (<HTMLInputElement>document.getElementById('P3')).value,

        E26: (<HTMLInputElement>document.getElementById('E26')).value,
        E31: (<HTMLInputElement>document.getElementById('E31')).value,

        E16: (<HTMLInputElement>document.getElementById('E16')).value,
        E17: (<HTMLInputElement>document.getElementById('E17')).value,
        E30: (<HTMLInputElement>document.getElementById('E30')).value,

        E6: (<HTMLInputElement>document.getElementById('E6')).value,
        E12: (<HTMLInputElement> document.getElementById('E12')).value,
        E29:  (<HTMLInputElement>document.getElementById('E29')).value,

        E9:  (<HTMLInputElement>document.getElementById('E9')).value,
        E15: (<HTMLInputElement> document.getElementById('E15')).value,
        E20:  (<HTMLInputElement>document.getElementById('E20')).value
      });

      this.prioService.isStartedChanged(true);
      this.stepThreeService.isStepThreeChanged(false);
    }else if(this.isPrio === true){

      this.stepFourService.isStepFourChanged(true);
      this.prioService.isStartedChanged(false);

    } else if(this.isStepFour === true){

      this.orderService.orderStarted(true);
      this.stepFourService.isStepFourChanged(false);

    }
  }

  gotoLastStep(){
    if(this.isStarted === true) {

      //Werte P1 abspeichern

      this.auftraegeService.auftraegeP1changed({
        P1: (<HTMLInputElement>document.getElementById('P1')).value,

        E26: (<HTMLInputElement>document.getElementById('E26')).value,
        E51: (<HTMLInputElement>document.getElementById('E51')).value,

        E16: (<HTMLInputElement>document.getElementById('E16')).value,
        E17: (<HTMLInputElement>document.getElementById('E17')).value,
        E50: (<HTMLInputElement>document.getElementById('E50')).value,

        E4: (<HTMLInputElement>document.getElementById('E4')).value,
        E10:(<HTMLInputElement> document.getElementById('E10')).value,
        E49:  (<HTMLInputElement>document.getElementById('E49')).value,

        E7:  (<HTMLInputElement>document.getElementById('E7')).value,
        E13: (<HTMLInputElement> document.getElementById('E13')).value,
        E18:  (<HTMLInputElement>document.getElementById('E18')).value
      });

      this.startService.isStartedChanged(false);

    }else if(this.isStepTwo === true){

      //Werte P2 abspeichern

      this.auftraegeService.auftraegeP2changed({
        P2: (<HTMLInputElement>document.getElementById('P2')).value,

        E26: (<HTMLInputElement>document.getElementById('E26')).value,
        E56: (<HTMLInputElement>document.getElementById('E56')).value,

        E16: (<HTMLInputElement>document.getElementById('E16')).value,
        E17: (<HTMLInputElement>document.getElementById('E17')).value,
        E55: (<HTMLInputElement>document.getElementById('E55')).value,

        E5: (<HTMLInputElement>document.getElementById('E5')).value,
        E11: (<HTMLInputElement> document.getElementById('E11')).value,
        E54:  (<HTMLInputElement>document.getElementById('E54')).value,

        E8:  (<HTMLInputElement>document.getElementById('E8')).value,
        E14: (<HTMLInputElement> document.getElementById('E14')).value,
        E19:  (<HTMLInputElement>document.getElementById('E19')).value
      });

      this.stepTwoService.isStepTwoChanged(false);
      this.startService.isStartedChanged(true);

    }else if(this.isStepThree === true){

      //Werte P3 abspeichern

      this.auftraegeService.auftraegeP3changed({
        P3: (<HTMLInputElement>document.getElementById('P3')).value,

        E26: (<HTMLInputElement>document.getElementById('E26')).value,
        E31: (<HTMLInputElement>document.getElementById('E31')).value,

        E16: (<HTMLInputElement>document.getElementById('E16')).value,
        E17: (<HTMLInputElement>document.getElementById('E17')).value,
        E30: (<HTMLInputElement>document.getElementById('E30')).value,

        E6: (<HTMLInputElement>document.getElementById('E6')).value,
        E12: (<HTMLInputElement> document.getElementById('E12')).value,
        E29:  (<HTMLInputElement>document.getElementById('E29')).value,

        E9:  (<HTMLInputElement>document.getElementById('E9')).value,
        E15: (<HTMLInputElement> document.getElementById('E15')).value,
        E20:  (<HTMLInputElement>document.getElementById('E20')).value
      });

      this.stepThreeService.isStepThreeChanged(false);
      this.stepTwoService.isStepTwoChanged(true);

    }else if(this.isPrio === true) {

      this.prioService.isStartedChanged(false);
      this.stepThreeService.isStepThreeChanged(true);

    }else if(this.isStepFour === true){

      this.stepFourService.isStepFourChanged(false);
      this.prioService.isStartedChanged(true);

    }else if(this.isWarehouse === true){

      this.warehouseService.isWarehouseChanged(false);

    }else if(this.isKpi === true){

      this.kpiService.isKpiChanged(false);

    }else if(this.result === true){

      this.resultService.isResultChanged(false);

    }else if(this.orderStarted === true){

      this.orderService.orderStarted(false);
      this.stepFourService.isStepFourChanged(true);

    }
  }

  changeLanguage(newLang){
    this.translationService.isLanguageChanged(newLang);
  }
}
