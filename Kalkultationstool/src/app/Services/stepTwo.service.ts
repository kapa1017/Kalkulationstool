import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StepTwoService {

  private isStepTwoSource = new BehaviorSubject<boolean>(false);
  isStepTwo$ = this.isStepTwoSource.asObservable();

  isStepTwoChanged(isStepTwo: boolean) {
    this.isStepTwoSource.next(isStepTwo);
  }
}
