import { Component, OnInit } from '@angular/core';
import {AuftraegeService} from "../Services/auftraege.service";
import {TranslationService} from "../Services/translation.service";
import {getTranslation} from '../Utils/Translations';

@Component({
  selector: 'app-work-calculation',
  templateUrl: './work-calculation.component.html',
  styleUrls: ['./work-calculation.component.css']
})
export class WorkCalculationComponent {

  language;

  auftraegeP1: any;
  auftraegeP2: any;
  auftraegeP3: any;
  auftraegeGesamt: any;

  weekMinutes = 2400;

  worktime1 = 0;
  worktime2 = 0;
  worktime3 = 0;
  worktime4 = 0;
  worktime5 = 0;
  worktime6 = 0;
  worktime7 = 0;
  worktime8 = 0;
  worktime9 = 0;
  worktime10 = 0;
  worktime11 = 0;
  worktime12 = 0;
  worktime13 = 0;
  worktime14 = 0;

  setupTime1 = 0;
  setupTime2 = 0;
  setupTime3 = 0;
  setupTime4 = 0;
  setupTime5 = 0;
  setupTime6 = 0;
  setupTime7 = 0;
  setupTime8 = 0;
  setupTime9 = 0;
  setupTime10 = 0;
  setupTime11 = 0;
  setupTime12 = 0;
  setupTime13 = 0;
  setupTime14 = 0;

  shift1 = 1;
  shift2 = 1;
  shift3 = 1;
  shift4 = 1;
  shift5 = 1;
  shift6 = 1;
  shift7 = 1;
  shift8 = 1;
  shift9 = 1;
  shift10 = 1;
  shift11 = 1;
  shift12 = 1;
  shift13 = 1;
  shift14 = 1;

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  constructor(private auftraegeService: AuftraegeService, translationService: TranslationService) {
    auftraegeService.auftraeggeP1$.subscribe((newState: Object) => {
      this.auftraegeP1 = newState;
    });
    auftraegeService.auftraeggeP2$.subscribe((newState: Object) => {
      this.auftraegeP2 = newState;
    });
    auftraegeService.auftraeggeP3$.subscribe((newState: Object) => {
      this.auftraegeP3 = newState;
    });
    auftraegeService.auftraegeGesamt$.subscribe((newState: Object) => {
      this.auftraegeGesamt = newState;
    });
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });

    //Kalkulation der Arbeitszeiten

    this.worktime1 = this.auftraegeP1.E49 * 6 + this.auftraegeP2.E54 * 6 + this.auftraegeP3.E29 * 6;
    this.worktime2 = this.auftraegeP1.E50 * 5 + this.auftraegeP2.E55 * 5 + this.auftraegeP3.E30 * 5;
    this.worktime3 = this.auftraegeP1.E51 * 5 + this.auftraegeP2.E56 * 6 + this.auftraegeP3.E31 * 6;
    this.worktime4 = this.auftraegeP1.P1 * 6 + this.auftraegeP2.P2 * 7 + this.auftraegeP3.P3 * 7;
    this.worktime5 = this.auftraegeP1.E16 * 2 + this.auftraegeP2.E16 * 2 + this.auftraegeP3.E16 * 2
      + this.auftraegeP1.E18 * 3 + this.auftraegeP2.E19 * 3 + this.auftraegeP3.E20 * 3;
    this.worktime6 = this.auftraegeP1.E10 * 2 + this.auftraegeP2.E11 * 2 + this.auftraegeP3.E12 * 2
      + this.auftraegeP1.E13 * 2 + this.auftraegeP2.E14 * 2 + this.auftraegeP3.E15 * 2
      + this.auftraegeP1.E18 * 2 + this.auftraegeP2.E19 * 2 + this.auftraegeP3.E20 * 2
      + this.auftraegeP1.E26 * 2 + this.auftraegeP2.E26 * 2 + this.auftraegeP3.E26 * 2;
    this.worktime7 = this.auftraegeP1.E10 * 1 + this.auftraegeP2.E11 * 2 + this.auftraegeP3.E12 * 2
      + this.auftraegeP1.E13 * 1 + this.auftraegeP2.E14 * 2 + this.auftraegeP3.E15 * 2
      + this.auftraegeP1.E18 * 3 + this.auftraegeP2.E19 * 3 + this.auftraegeP3.E20 * 3;
    this.worktime8 = this.auftraegeP1.E10 * 3 + this.auftraegeP2.E11 * 3 + this.auftraegeP3.E12 * 3
      + this.auftraegeP1.E13 * 3 + this.auftraegeP2.E14 * 3 + this.auftraegeP3.E15 * 3
      + this.auftraegeP1.E18 * 2 + this.auftraegeP2.E19 * 2 + this.auftraegeP3.E20 * 2;
    this.worktime9 = this.auftraegeP1.E4 * 4 + this.auftraegeP2.E5 * 4 + this.auftraegeP3.E6 * 4
      + this.auftraegeP1.E7 * 4 + this.auftraegeP2.E8 * 4 + this.auftraegeP3.E9 * 4;
    this.worktime10 = this.auftraegeP1.E4 * 3 + this.auftraegeP2.E5 * 3 + this.auftraegeP3.E6 * 3
      + this.auftraegeP1.E7 * 3 + this.auftraegeP2.E8 * 3 + this.auftraegeP3.E9 * 3;
    this.worktime11 = this.auftraegeP1.E10 * 3 + this.auftraegeP2.E11 * 3 + this.auftraegeP3.E12 * 3
      + this.auftraegeP1.E13 * 3 + this.auftraegeP2.E14 * 3 + this.auftraegeP3.E15 * 3;
    this.worktime12 = this.auftraegeP1.E10 * 2 + this.auftraegeP2.E11 * 2 + this.auftraegeP3.E12 * 2
      + this.auftraegeP1.E13 * 2 + this.auftraegeP2.E14 * 2 + this.auftraegeP3.E15 * 2;
    this.worktime13 = this.auftraegeP1.E16 * 3 + this.auftraegeP2.E16 * 3 + this.auftraegeP3.E16 * 3;
    this.worktime14 = this.auftraegeP1.E17 * 3 + this.auftraegeP2.E17 * 3 + this.auftraegeP3.E17 * 3
      + this.auftraegeP1.E26 * 3 + this.auftraegeP2.E26 * 3 + this.auftraegeP3.E26 * 3;

    // Kalkulation der Setupzeiten

    var blackList = [];

    this.auftraegeGesamt.forEach(el => {
      if (parseInt(el.quantity) > 0 && blackList.indexOf(el) < 0) {
        blackList.push(el);
        switch (el.item) {
          case '1':
            this.setupTime4 += 30;
            break;
          case '2':
            this.setupTime4 += 30;
            break;
          case '3':
            this.setupTime4 += 30;
            break;
          case '4':
            this.setupTime9 += 20;
            this.setupTime10 += 20;
            break;
          case '5':
            this.setupTime9 += 20;
            this.setupTime10 += 20;
            break;
          case '6':
            this.setupTime9 += 20;
            this.setupTime10 += 20;
            break;
          case '7':
            this.setupTime9 += 20;
            this.setupTime10 += 20;
            break;
          case '8':
            this.setupTime9 += 20;
            this.setupTime10 += 20;
            break;
          case '9':
            this.setupTime9 += 20;
            this.setupTime10 += 20;
            break;
          case '10':
            this.setupTime7 += 15;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '11':
            this.setupTime7 += 15;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '12':
            this.setupTime7 += 15;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '13':
            this.setupTime7 += 15;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '14':
            this.setupTime7 += 15;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '15':
            this.setupTime7 += 15;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '16':
            this.setupTime5 += 15;
            break;
          case '17':
            this.setupTime14 += 15;
            break;
          case '18':
            this.setupTime5 += 15;
            this.setupTime7 += 20;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '19':
            this.setupTime5 += 15;
            this.setupTime7 += 20;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '20':
            this.setupTime5 += 15;
            this.setupTime7 += 20;
            this.setupTime6 += 20;
            this.setupTime8 += 15;
            break;
          case '26':
            this.setupTime6 += 30;
            this.setupTime14 += 15;
            break;
          case '29':
            this.setupTime1 += 20;
            break;
          case '30':
            this.setupTime2 += 20;
            break;
          case '31':
            this.setupTime3 += 20;
            break;
          case '49':
            this.setupTime1 += 20;
            break;
          case '50':
            this.setupTime2 += 20;
            break;
          case '51':
            this.setupTime3 += 20;
            break;
          case '54':
            this.setupTime1 += 20;
            break;
          case '55':
            this.setupTime2 += 30;
            break;
          case '56':
            this.setupTime3 += 20;
            break;
        }
      }
    });

    //Kalkulation der Schichten

    this.shift1 = ((this.setupTime1+this.worktime1)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime1 + this.worktime1 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift2 = ((this.setupTime2+this.worktime2)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime2 + this.worktime2 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift3 = ((this.setupTime3+this.worktime3)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime3 + this.worktime3 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift4 = ((this.setupTime4+this.worktime4)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime4 + this.worktime4 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift5 = ((this.setupTime5+this.worktime5)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime5 + this.worktime5 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift6 = ((this.setupTime6+this.worktime6)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime6 + this.worktime6 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift7 = ((this.setupTime7+this.worktime7)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime7 + this.worktime7 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift8 = ((this.setupTime8+this.worktime8)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime8 + this.worktime8 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift9 = ((this.setupTime9+this.worktime9)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime9 + this.worktime9 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift10 = ((this.setupTime10+this.worktime10)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime10 + this.worktime10 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift11 = ((this.setupTime11+this.worktime11)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime11 + this.worktime11 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift12 = ((this.setupTime12+this.worktime12)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime12 + this.worktime12 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift13 = ((this.setupTime13+this.worktime13)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime13 + this.worktime13 / this.weekMinutes > 1.5) ? 2 : 1);
    this.shift14 = ((this.setupTime14+this.worktime14)/this.weekMinutes > 2.5) ? 3 :
      ((this.setupTime14 + this.worktime14 / this.weekMinutes > 1.5) ? 2 : 1);
  }
}
