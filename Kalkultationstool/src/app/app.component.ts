import { Component } from '@angular/core';
import {StartService} from './Services/start.service';
import 'rxjs/add/operator/map';
import {StepTwoService} from "./Services/stepTwo.service";
import {StepThreeService} from "./Services/stepThree.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StartService, StepTwoService, StepThreeService]
})
export class AppComponent {
  isStarted = false;
  isStepTwo = false;
  isStepThree = false;

  data = {};
  result: any;

  constructor(private startService: StartService,
              private stepTwoService: StepTwoService,
              private stepThreeService: StepThreeService) {
    startService.isStarted$.subscribe((isStarted: boolean) => {
      this.isStarted = isStarted;
    });
    stepTwoService.isStepTwo$.subscribe((isStepTwo: boolean) => {
      this.isStepTwo = isStepTwo;
    });
    stepThreeService.isStepThree$.subscribe((isStepThree: boolean) => {
      this.isStepThree = isStepThree;
    })
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
    }else if(this.isStepThree === false && this.isStepTwo === true && this.isStarted === false){
      this.stepThreeService.isStepThreeChanged(true);
      this.stepTwoService.isStepTwoChanged(false);
      this.startService.isStartedChanged(false);
    }
  }

  gotoLastStep(){
    if(this.isStepTwo === false && this.isStarted === true) {
      this.stepTwoService.isStepTwoChanged(false);
      this.startService.isStartedChanged(false);
    }else if(this.isStepThree === false && this.isStepTwo === true && this.isStarted === false){
      this.stepThreeService.isStepThreeChanged(false);
      this.stepTwoService.isStepTwoChanged(false);
      this.startService.isStartedChanged(true);
    }else if(this.isStepThree === true && this.isStepTwo === false && this.isStarted === false){
      this.stepThreeService.isStepThreeChanged(false);
      this.stepTwoService.isStepTwoChanged(true);
      this.startService.isStartedChanged(false);
    }
  }
}
