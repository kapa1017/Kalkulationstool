import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuftraegeService {

  private auftraegeP1Source = new BehaviorSubject<Object>({});
  private auftraegeP2Source = new BehaviorSubject<Object>({});
  private auftraegeP3Source = new BehaviorSubject<Object>({});

  auftraeggeP1$ = this.auftraegeP1Source.asObservable();
  auftraeggeP2$ = this.auftraegeP2Source.asObservable();
  auftraeggeP3$ = this.auftraegeP3Source.asObservable();

  auftraegeP1changed(newState: Object) {
    this.auftraegeP1Source.next(newState);
  }
  auftraegeP2changed(newState: Object) {
    this.auftraegeP2Source.next(newState);
  }
  auftraegeP3changed(newState: Object) {
    this.auftraegeP3Source.next(newState);
  }
}
