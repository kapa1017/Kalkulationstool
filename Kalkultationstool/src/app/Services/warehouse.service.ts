import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class WarehouseService {

  private isWarehouseSource = new BehaviorSubject<boolean>(false);
  isWwarehouseStarted$ = this.isWarehouseSource.asObservable();

  isWarehouseChanged(newState: boolean) {
    this.isWarehouseSource.next(newState);
  }
}
