import { Component} from '@angular/core';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";
import {BackendService} from "../Services/backend.service";
import {NavigationService} from "../Services/navigation.service";
import {OrderService} from "../Services/order.service";
import {AuftraegeService} from "../Services/auftraege.service";
import {PrognoseService} from "app/Services/prognose.service";
import {WorkService} from "../Services/work.service";

@Component({
  selector: 'app-order-calculation-step2',
  templateUrl: './order-calculation-step2.component.html',
  styleUrls: ['./order-calculation-step2.component.css']
})
export class OrderCalculationStep2Component {

  language;
  JSONData;
  navigationStep;

  work: any;
  auftraege: any;
  prognose: any;
  order: any;

  input: any;
  orderlist: Object[];
  productionlist: Object[];
  workingtimelist: Object[];

  constructor(private backendService: BackendService,
              private translationService: TranslationService,
              private navigationService: NavigationService,
              private auftraegeService: AuftraegeService,
              private prognoseService: PrognoseService,
              private workService: WorkService,
              private orderService: OrderService) {
    backendService.getData().subscribe((data: Object) => {
      this.JSONData = data;
    });
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

    this.orderlist = [];
    this.productionlist = [];
    this.workingtimelist = [];

    this.input = {
      user: {
        game: 200,
        group: 13,
        period: 8,
      },
      qualitycontrol: {
        type: 'yes',
        losequantity: '0',
        delay: '8'
      },
      orderlist: [],
      productionlist: [],
      workingtimelist: [],
    }

  }

  goToLastStep(){
    this.navigationService.isNavigationChanged(6);
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  export(){

    debugger;

    this.auftraege.forEach(el => {
      this.productionlist.push({
        production: {
          article: el.item.toString(),
          quantity: el.quantity.toString(),
          priority: el.batch.toString()
        }
      });
    });

    this.work.forEach(el => {
      this.workingtimelist.push({
        workingtime: {
          station: el.id.toString(),
          shift: el.shifts.toString(),
          overtime: el.overtime.toString()
        }
      });
    });

    this.order.forEach(el => {
      this.orderlist.push({
        order: {
          article: el.item.toString(),
          quantity: el.item.toString(),
          modus: el.item.modus.toString(),
        }
      });
    });

    this.input.productionlist = this.productionlist;
    this.input.workingtimelist = this.workingtimelist;
    this.input.orderlist = this.orderlist;

    debugger;

    this.navigationService.isNavigationChanged(0);
  }
}
