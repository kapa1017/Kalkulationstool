import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PrognoseService {

  p1 = {per1: 0, per2: 0, per3:0, per4: 0};
  p2 = {per1: 0, per2: 0, per3:0, per4: 0};
  p3 = {per1: 0, per2: 0, per3:0, per4: 0};

  prognose = [this.p1, this.p2, this.p3];

  private prognoseSource = new BehaviorSubject<Object>(this.prognose);

  prognose$ = this.prognoseSource.asObservable();

  prognoseChanged(newState: Object[]) {
    this.prognoseSource.next(newState);
  }
}
