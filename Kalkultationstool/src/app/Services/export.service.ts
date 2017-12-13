import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ExportService {

  private exportSource = new BehaviorSubject<Object>({});

  export$ = this.exportSource.asObservable();

  exportChanged(newState: Object) {
    this.exportSource.next(newState);
  }
}
