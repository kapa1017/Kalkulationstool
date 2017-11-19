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
    debugger;
  }
}
