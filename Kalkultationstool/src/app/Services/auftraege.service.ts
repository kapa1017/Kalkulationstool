import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuftraegeService {

  private auftraegeP1Source = new BehaviorSubject<Object>({});
  private inputP1Source = new BehaviorSubject({});
  private auftraegeP2Source = new BehaviorSubject<Object>({});
  private inputP2Source = new BehaviorSubject({});
  private auftraegeP3Source = new BehaviorSubject<Object>({});
  private inputP3Source = new BehaviorSubject({});
  private auftraegeGesamtSource = new BehaviorSubject<Array<Object>>([]);

  auftraeggeP1$ = this.auftraegeP1Source.asObservable();
  auftraeggeP2$ = this.auftraegeP2Source.asObservable();
  auftraeggeP3$ = this.auftraegeP3Source.asObservable();
  inpurtP1$ = this.inputP1Source.asObservable();
  inpurtP2$ = this.inputP2Source.asObservable();
  inpurtP3$ = this.inputP3Source.asObservable();
  auftraegeGesamt$ = this.auftraegeGesamtSource.asObservable();

  auftraegeP1changed(newState: Object) {
    this.auftraegeP1Source.next(newState);
  }
  auftraegeP2changed(newState: Object) {
    this.auftraegeP2Source.next(newState);
  }
  auftraegeP3changed(newState: Object) {
    this.auftraegeP3Source.next(newState);
  }
  inputP1changed(newState: Object) {
    this.inputP1Source.next(newState)
  }
  inputP2changed(newState: Object) {
    this.inputP2Source.next(newState)
  }
  inputP3changed(newState: Object) {
    this.inputP3Source.next(newState)
  }
  auftraegeGesamtChanged(newState: Array<Object>) {
    this.auftraegeGesamtSource.next(newState);
  }
}
