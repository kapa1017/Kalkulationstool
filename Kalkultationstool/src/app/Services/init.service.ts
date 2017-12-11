import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class InitService {

  private isInitSource = new BehaviorSubject<boolean>(false);
  isInit$ = this.isInitSource.asObservable();

  isStartedChanged(newState: boolean) {
    this.isInitSource.next(newState);
  }
}
