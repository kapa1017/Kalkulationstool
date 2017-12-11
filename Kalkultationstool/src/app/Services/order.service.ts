import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class OrderService {

  private orderSource = new BehaviorSubject<Object[]>([]);
  private orderStartedSource = new BehaviorSubject<boolean>(false);

  order$ = this.orderSource.asObservable();
  orderStarted$ = this.orderStartedSource.asObservable();

  orderChanged(newState: Object[]) {
    this.orderSource.next(newState);
  }

  orderStarted(newState: boolean) {
    this.orderStartedSource.next(newState)
  }
}
