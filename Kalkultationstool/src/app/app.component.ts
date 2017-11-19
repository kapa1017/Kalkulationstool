import { Component } from '@angular/core';
import {StartService} from './Services/start.service';
import 'rxjs/add/operator/map';
import {StepTwoService} from "./Services/stepTwo.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StartService, StepTwoService]
})
export class AppComponent {
  isStarted = false;
  isStepTwo = false;
  isStepThree = false;

  data = {};
  result: any;

  constructor(private startService: StartService,
              private stepTwoService: StepTwoService) {
    startService.isStarted$.subscribe((isStarted: boolean) => {
      this.isStarted = isStarted;
    });
    stepTwoService.isStepTwo$.subscribe((isStepTwo: boolean) => {
      this.isStepTwo = isStepTwo;
    })
  }

  startCalculation() {
    if (this.isStarted === false) {
      this.startService.isStartedChanged(true);
    }
  }

  gotoStepTwo(){
    if(this.isStepTwo === false) {
      this.stepTwoService.isStepTwoChanged(true);
      this.startService.isStartedChanged(false);
    }
  }


}
