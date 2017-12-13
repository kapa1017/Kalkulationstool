import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PrognoseService {

  private prognoseSource = new BehaviorSubject<Object>([]);

  prognose$ = this.prognoseSource.asObservable();

  prognoseChanged(newState: Object[]) {
    this.prognoseSource.next(newState);
  }
}
