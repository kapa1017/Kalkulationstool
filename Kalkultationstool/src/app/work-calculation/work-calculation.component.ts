import { Component, OnInit } from '@angular/core';
import {AuftraegeService} from "../Services/auftraege.service";

@Component({
  selector: 'app-work-calculation',
  templateUrl: './work-calculation.component.html',
  styleUrls: ['./work-calculation.component.css']
})
export class WorkCalculationComponent {

  auftraegeP1 = {};
  auftraegeP2 = {};
  auftraegeP3 = {};

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
  }
}
