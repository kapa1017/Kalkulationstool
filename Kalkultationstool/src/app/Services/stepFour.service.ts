import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StepFourService {

  private isStepFourSource = new BehaviorSubject<boolean>(false);
  isStepFour$ = this.isStepFourSource.asObservable();

  isStepFourChanged(isStepFour: boolean) {
    this.isStepFourSource.next(isStepFour);
  }
}
