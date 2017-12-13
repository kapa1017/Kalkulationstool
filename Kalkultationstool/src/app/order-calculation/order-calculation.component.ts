import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';
import {OrderService} from '../Services/order.service';

@Component({
  selector: 'app-order-calculation',
  templateUrl: './order-calculation.component.html',
  styleUrls: ['./order-calculation.component.css']
})
export class OrderCalculationComponent {

  JSONData: any;
  orders: any;

  orderstarted2: any;

  productionProgram: number[];

  constructor(private backendService: BackendService, private orderService: OrderService) {
    backendService.getData().subscribe((data: Object) => {
      this.JSONData = data;
    });
  }
}
