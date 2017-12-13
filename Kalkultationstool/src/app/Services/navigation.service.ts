import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {

  private navigationSource = new BehaviorSubject<number>(0);
  isNavigation$ = this.navigationSource.asObservable();

  isNavigationChanged(newState: number) {
    this.navigationSource.next(newState);
  }
}

