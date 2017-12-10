import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ResultService {

  private isResultSource = new BehaviorSubject<boolean>(false);
  isResultStarted$ = this.isResultSource.asObservable();

  isResultChanged(newState: boolean) {
    this.isResultSource.next(newState);
  }
}
