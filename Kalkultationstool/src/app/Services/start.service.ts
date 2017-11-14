import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StartService {

  private isStartedSource = new BehaviorSubject<boolean>(false);
  isStarted$ = this.isStartedSource.asObservable();

  isStartedChanged(isStarted: boolean) {
    this.isStartedSource.next(isStarted);
  }
}
