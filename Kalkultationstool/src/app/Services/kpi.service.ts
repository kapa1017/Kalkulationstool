import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class KpiService {

  private isKpiSource = new BehaviorSubject<boolean>(false);
  isKpiStarted$ = this.isKpiSource.asObservable();

  isKpiChanged(newState: boolean) {
    this.isKpiSource.next(newState);
  }
}
