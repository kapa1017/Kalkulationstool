import { Component, OnInit } from '@angular/core';
import {AuftraegeService} from "../Services/auftraege.service";

@Component({
  selector: 'app-work-calculation',
  templateUrl: './work-calculation.component.html',
  styleUrls: ['./work-calculation.component.css']
})
export class WorkCalculationComponent {

  auftraegeP1: any;
  auftraegeP2: any;
  auftraegeP3: any;

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


  constructor(private auftraegeService: AuftraegeService) {
    auftraegeService.auftraeggeP1$.subscribe((newState: Object) => {
      this.auftraegeP1 = newState
    });
    auftraegeService.auftraeggeP2$.subscribe((newState: Object) => {
      this.auftraegeP2 = newState
    });
    auftraegeService.auftraeggeP3$.subscribe((newState: Object) => {
      this.auftraegeP3 = newState
    });

    //Kalkulation der Arbeitszeiten

    this.worktime1 = this.auftraegeP1.E49*6 + this.auftraegeP2.E54*6 + this.auftraegeP3.E29*6;
    this.worktime2 = this.auftraegeP1.E50*5 + this.auftraegeP2.E55*5 + this.auftraegeP3.E30*5;
    this.worktime3 = this.auftraegeP1.E51*5 + this.auftraegeP2.E56*6 + this.auftraegeP3.E31*6;
    this.worktime4 = this.auftraegeP1.P1*6 + this.auftraegeP2.P2*7 + this.auftraegeP3.P3*7;
    this.worktime5 = this.auftraegeP1.E16*2 + this.auftraegeP2.E16*2 + this.auftraegeP3.E16*2
                    + this.auftraegeP1.E18*3 + this.auftraegeP2.E19*3 + this.auftraegeP3.E20*3;
    this.worktime6 = this.auftraegeP1.E10*2 + this.auftraegeP2.E11*2 + this.auftraegeP3.E12*2
                    + this.auftraegeP1.E13*2 + this.auftraegeP2.E14*2 + this.auftraegeP3.E15*2
                    + this.auftraegeP1.E18*2 + this.auftraegeP2.E19*2 + this.auftraegeP3.E20*2
                    + this.auftraegeP1.E26*2 + this.auftraegeP2.E26*2 + this.auftraegeP3.E26*2;
    this.worktime7 = this.auftraegeP1.E10*1 + this.auftraegeP2.E11*2 + this.auftraegeP3.E12*2
                    + this.auftraegeP1.E13*1 + this.auftraegeP2.E14*2 + this.auftraegeP3.E15*2
                    + this.auftraegeP1.E18*3 + this.auftraegeP2.E19*3 + this.auftraegeP3.E20*3;
    this.worktime8 = this.auftraegeP1.E10*3 + this.auftraegeP2.E11*3 + this.auftraegeP3.E12*3
                    + this.auftraegeP1.E13*3 + this.auftraegeP2.E14*3 + this.auftraegeP3.E15*3
                    + this.auftraegeP1.E18*2 + this.auftraegeP2.E19*2 + this.auftraegeP3.E20*2;
    this.worktime9 = this.auftraegeP1.E4*4 + this.auftraegeP2.E5*4 + this.auftraegeP3.E6*4
                    + this.auftraegeP1.E7*4 + this.auftraegeP2.E8*4 + this.auftraegeP3.E9*4;
    this.worktime10 = this.auftraegeP1.E4*3 + this.auftraegeP2.E5*3 + this.auftraegeP3.E6*3
                    + this.auftraegeP1.E7*3 + this.auftraegeP2.E8*3 + this.auftraegeP3.E9*3;
    this.worktime11 = this.auftraegeP1.E10*3 + this.auftraegeP2.E11*3 + this.auftraegeP3.E12*3
                    + this.auftraegeP1.E13*3 + this.auftraegeP2.E14*3 + this.auftraegeP3.E15*3;
    this.worktime12 = this.auftraegeP1.E10*2 + this.auftraegeP2.E11*2 + this.auftraegeP3.E12*2
                    + this.auftraegeP1.E13*2 + this.auftraegeP2.E14*2 + this.auftraegeP3.E15*2;
    this.worktime13 = this. auftraegeP1.E16*3 + this.auftraegeP2.E16*3 + this.auftraegeP3.E16*3;
    this.worktime14 = this.auftraegeP1.E17*3 + this.auftraegeP2.E17*3 + this.auftraegeP3.E17*3
                    + this.auftraegeP1.E26*3 + this.auftraegeP2.E26*3 + this.auftraegeP3.E26*3;

  }
}
