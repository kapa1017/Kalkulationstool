import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StepThreeService {

  private isStepThreeSource = new BehaviorSubject<boolean>(false);
  isStepThree$ = this.isStepThreeSource.asObservable();

  isStepThreeChanged(isStepThree: boolean) {
    this.isStepThreeSource.next(isStepThree);
  }
}
