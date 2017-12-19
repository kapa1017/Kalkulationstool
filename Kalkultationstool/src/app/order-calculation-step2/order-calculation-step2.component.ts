import { Component} from '@angular/core';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";
import {BackendService} from "../Services/backend.service";
import {NavigationService} from "../Services/navigation.service";
import {OrderService} from "../Services/order.service";
import {AuftraegeService} from "../Services/auftraege.service";
import {PrognoseService} from "app/Services/prognose.service";
import {WorkService} from "../Services/work.service";
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-order-calculation-step2',
  templateUrl: './order-calculation-step2.component.html',
  styleUrls: ['./order-calculation-step2.component.css']
})
export class OrderCalculationStep2Component {

  selectedId;
  language;
  JSONData;
  navigationStep;
  actPeriod: number;
  futureOrder = [];

  warehouse = [];

    kaufteile= [{
      id: 21,
      deliverytime: 1.8,
      abweichung: 0.4,
      p1: 1,
      p2: 0,
      p3: 0,
      diskont:300,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
    }, {
      id: 22,
      deliverytime: 1.7,
      abweichung: 0.4,
      p1: 0,
      p2: 1,
      p3: 0,
      diskont: 300,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 23,
      deliverytime: 1.2,
      abweichung: 0.2,
      p1: 0,
      p2: 0,
      p3: 1,
      diskont: 300,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 24,
      deliverytime: 3.2,
      abweichung: 0.3,
      p1: 7,
      p2: 7,
      p3: 7,
      diskont: 6100,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 25,
      deliverytime: 0.9,
      abweichung: 0.2,
      p1: 4,
      p2: 4,
      p3: 4,
      diskont: 3600,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 27,
      deliverytime: 0.9,
      abweichung: 0.2,
      p1: 2,
      p2: 2,
      p3: 2,
      diskont: 1800,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 28,
      deliverytime: 1.7,
      abweichung: 0.4,
      p1: 4,
      p2: 5,
      p3: 6,
      diskont: 4500,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 32,
      deliverytime: 2.1,
      abweichung: 0.5,
      p1: 3,
      p2: 3,
      p3: 3,
      diskont: 2700,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 33,
      deliverytime: 1.9,
      abweichung: 0.5,
      p1: 0,
      p2: 0,
      p3: 2,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 34,
      deliverytime: 1.6,
      abweichung: 0.3,
      p1: 0,
      p2: 0,
      p3: 72,
      diskont: 22000,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 35,
      deliverytime: 2.2,
      abweichung: 0.4,
      p1: 4,
      p2: 4,
      p3: 4,
      diskont: 3600,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 36,
      deliverytime: 1.2,
      abweichung: 0.1,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 37,
      deliverytime: 1.5,
      abweichung: 0.3,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 38,
      deliverytime: 1.7,
      abweichung: 0.4,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 300,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 39,
      deliverytime: 1.5,
      abweichung: 0.3,
      p1: 2,
      p2: 2,
      p3: 2,
      diskont: 1800,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 40,
      deliverytime: 1.7,
      abweichung: 0.2,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 41,
      deliverytime: 0.9,
      abweichung: 0.2,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 42,
      deliverytime: 1.2,
      abweichung: 0.3,
      p1: 2,
      p2: 2,
      p3: 2,
      diskont: 1800,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 43,
      deliverytime: 2.0,
      abweichung: 0.5,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 44,
      deliverytime: 1.0,
      abweichung: 0.2,
      p1: 3,
      p2: 3,
      p3: 3,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 45,
      deliverytime: 1.7,
      abweichung: 0.3,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 46,
      deliverytime: 0.9,
      abweichung: 0.3,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 47,
      deliverytime: 1.1,
      abweichung: 0.1,
      p1: 1,
      p2: 1,
      p3: 1,
      diskont: 900,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 48,
      deliverytime: 1.0,
      abweichung: 0.2,
      p1: 2,
      p2: 2,
      p3: 2,
      diskont: 1800,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 52,
      deliverytime: 1.6,
      abweichung: 0.4,
      p1: 2,
      p2: 0,
      p3: 0,
      diskont: 600,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 53,
      deliverytime: 1.6,
      abweichung: 0.2,
      p1: 0,
      p2: 0,
      p3: 72,
      diskont: 22000,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 57,
      deliverytime: 1.7,
      abweichung: 0.3,
      p1: 0,
      p2: 2,
      p3: 0,
      diskont: 600,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 58,
      deliverytime: 1.6,
      abweichung: 0.5,
      p1: 0,
      p2: 72,
      p3: 0,
      diskont: 22000,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }, {
      id: 59,
      deliverytime: 0.7,
      abweichung: 0.2,
      p1: 2,
      p2: 2,
      p3: 2,
      diskont: 1800,
      bestandAktuell: 0,
      bbP1: 0,
      bbP2: 0,
      bbP3: 0,
      bbP4: 0,
      bestellMenge: 0,
      bestellTyp: 1,
      gpP2: 0,
      gpP3: 0,
      gpP4: 0,
      gpP5: 0
  }];

  work: any;
  auftraege: any;
  prognose: any;
  order: any;

  input: any;
  orderlist: Object[];
  productionlist: Object[];
  workingtimelist: Object[];

  constructor( private http: Http,
              private backendService: BackendService,
              private translationService: TranslationService,
              private navigationService: NavigationService,
              private auftraegeService: AuftraegeService,
              private prognoseService: PrognoseService,
              private workService: WorkService,
              private orderService: OrderService) {
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
    auftraegeService.auftraegeGesamt$.subscribe((newState: Object[]) => {
      this.auftraege = newState;
    });
    workService.work$.subscribe((newState: Object[]) => {
      this.work = newState;
    });
    prognoseService.prognose$.subscribe((newState: Object[]) => {
      this.prognose = newState;
    });
    orderService.order$.subscribe((newState: Object) => {
      this.order = newState;
    });
    backendService.selectedId$.subscribe((newState: String) => {
      this.selectedId = newState
    });

    backendService.getData(this.selectedId).subscribe((data: Object) => {
      this.JSONData = data;
      this.updateValues();
      this.futureOrder = this.JSONData.results.futureinwardstockmovement[0].order;
      this.actPeriod = parseInt(this.JSONData.results.$.period) + 1;
      this.calculateValuesForTable();
    });

    this.orderlist = [];
    this.productionlist = [];
    this.workingtimelist = [];

    this.input = {
      "user": {
        "@": {
          "game": "200",
          "group": "13",
          "period": "8"
        }
      },
      "qualitycontrol": {
        "@": {
          "type": "yes",
          "losequantity": "0",
          "delay": "8"
        }
      },
      "orderlist": { "order": [] },
      "productionlist": { "production": [] },
      "workingtimelist": { "workingtime": [] }
    }
  }

  calculateValuesForTable(){

    this.kaufteile.forEach(el => {
      // Bestand kalkulieren

      this.warehouse.forEach(whItem => {
        if(whItem.id == el.id){
          el.bestandAktuell = whItem.amount;
        }
      });

      // Bruttobedarf kalkulieren Periode 1

      el.bbP1 = el.p1 * this.prognose[0].per1 + el.p2 * this.prognose[1].per1 + el.p3 * this.prognose[2].per1;
      el.bbP2 = el.p1 * this.prognose[0].per2 + el.p2 * this.prognose[1].per2 + el.p3 * this.prognose[2].per2;
      el.bbP3 = el.p1 * this.prognose[0].per3 + el.p2 * this.prognose[1].per3 + el.p3 * this.prognose[2].per3;
      el.bbP4 = el.p1 * this.prognose[0].per4 + el.p2 * this.prognose[1].per4 + el.p3 * this.prognose[2].per4;

      // Geplanter Bestand ohne Berücksichtigung der eingehenden Bestellungen

      el.gpP2 = el.bestandAktuell - el.bbP1;
      el.gpP3 = el.gpP2 - el.bbP2;
      el.gpP4 = el.gpP3 - el.bbP3;
      el.gpP5 = el.gpP4 - el.bbP4;

      // Geplanter Bestang mit eingehenden Bestellungen

      this.futureOrder.forEach(futureOrder => {

        if(el.id == futureOrder.$.article){
          if(((parseInt(futureOrder.$.orderPeriod) + el.deliverytime + 0.5*el.abweichung) <= this.actPeriod) || futureOrder.$.mode == 5){
            el.gpP2 += parseInt(futureOrder.$.amount);
            el.gpP3 += parseInt(futureOrder.$.amount);
            el.gpP4 += parseInt(futureOrder.$.amount);
            el.gpP5 += parseInt(futureOrder.$.amount);
          } else if(parseInt(futureOrder.$.orderPeriod) + el.deliverytime + 0.5*el.abweichung <= this.actPeriod + 1){
            el.gpP3 += parseInt(futureOrder.$.amount);
            el.gpP4 += parseInt(futureOrder.$.amount);
            el.gpP5 += parseInt(futureOrder.$.amount);
          } else if(parseInt(futureOrder.$.orderPeriod) + el.deliverytime + 0.5*el.abweichung <= this.actPeriod + 1){
            el.gpP4 += parseInt(futureOrder.$.amount);
            el.gpP5 += parseInt(futureOrder.$.amount);
          } else if(parseInt(futureOrder.$.orderPeriod) + el.deliverytime + 0.5*el.abweichung <= this.actPeriod + 1){
            el.gpP5 += parseInt(futureOrder.$.amount);
          }
        }
      });
    });
  }

  updateValues(){
    this.JSONData.results.warehousestock[0].article.forEach((el) => {
      this.warehouse.push({
        id: el.$.id,
        amount: el.$.amount,
      });
    });
  }

  goToLastStep(){
    this.navigationService.isNavigationChanged(6);
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  updateOnChange(event){


    let id = event.currentTarget.id.replace('menge', '');
    id.replace('typ', '');

    let menge;
    let typ;
    let elementToChange = this.kaufteile[parseInt(id)];
    let bestelldauer = elementToChange.deliverytime + 0.5 * elementToChange.abweichung;

    if(event.currentTarget.id.startsWith('menge')){
      menge = event.currentTarget.value;
      const otherElement = <HTMLInputElement>document.getElementById('typ' + id);
      typ = parseInt(otherElement.value);
    }else{
      typ = event.currentTarget.value
      const otherElement = <HTMLInputElement>document.getElementById('menge' + id);
      menge = parseInt(otherElement.value);
    }

    if(typ !==  1){
      elementToChange.gpP2 += parseInt(menge);
      elementToChange.gpP3 += parseInt(menge);
      elementToChange.gpP4 += parseInt(menge);
      elementToChange.gpP5 += parseInt(menge);
    } else {
      if( bestelldauer < 1){
        elementToChange.gpP2 += parseInt(menge);
        elementToChange.gpP3 += parseInt(menge);
        elementToChange.gpP4 += parseInt(menge);
        elementToChange.gpP5 += parseInt(menge);
      }else if( bestelldauer < 2){
        elementToChange.gpP3 += parseInt(menge);
        elementToChange.gpP4 += parseInt(menge);
        elementToChange.gpP5 += parseInt(menge);
      }else if( bestelldauer < 3){
        elementToChange.gpP4 += parseInt(menge);
        elementToChange.gpP5 += parseInt(menge);
      }else if( bestelldauer < 4){
        elementToChange.gpP5 += parseInt(menge);
      }
    }
  }

  setOrderValues(){
    this.orderlist.push()
  }


  extractData(res: Response) {
    const body = res.json();
    return body.element || [];
  }

  private errorHandler(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  export(){

    this.auftraege.forEach(el => {
      this.productionlist.push({
        "@": {
          "article": el.id.toString(),
          "quantity": el.quantity.toString(),
          "priority": el.batch.toString()
        }
      });
    });

    this.kaufteile.forEach(el => {
      if(el.bestellMenge > 0) {
        this.orderlist.push({
          "@": {
            "article": el.id.toString(),
            "quantity": el.bestellMenge.toString(),
            "mode": (el.bestellTyp + 3).toString()
          }
        });
      }
    });

    this.work.forEach(el => {
      this.workingtimelist.push({
        "@": {
          "station": el.id.toString(),
          "shift": el.shifts.toString(),
          "overtime": el.overtime.toString()
        }
      });
    });

    this.input.productionlist.production = this.productionlist;
    this.input.workingtimelist.workingtime = this.workingtimelist;
    this.input.orderlist.order = this.orderlist;

    //Request

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:3000/generate', JSON.stringify(this.input), options)

    this.navigationService.isNavigationChanged(0);

  }
}
