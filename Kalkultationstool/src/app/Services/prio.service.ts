import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PrioService {

  private isPrioSource = new BehaviorSubject<boolean>(false);
  isPrio$ = this.isPrioSource.asObservable();

  isStartedChanged(isPrio: boolean) {
    this.isPrioSource.next(isPrio);
  }
}
