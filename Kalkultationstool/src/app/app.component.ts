import { Component } from '@angular/core';
import {StartService} from './Services/start.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StartService]
})
export class AppComponent {
  isStarted = false;
  data = {};
  result: any;

  constructor(private startService: StartService) {
    startService.isStarted$.subscribe((isStarted: boolean) => {
      this.isStarted = isStarted;
    });
  }

  startCalculation() {
    if (this.isStarted === false) {
      this.startService.isStartedChanged(true);
    }
  }


}
