import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WorkService {

  private workSource = new BehaviorSubject<Object>([]);

  work$ = this.workSource.asObservable();

  workChanged(newState: Object[]) {
    this.workSource.next(newState);
  }
}
