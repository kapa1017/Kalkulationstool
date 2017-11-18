import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductionOrdersComponent } from './production-orders/production-orders.component';
import { ProductionOrders2Component } from './production-orders-2/production-orders-2.component';
import { ProductionOrders3Component } from './production-orders-3/production-orders-3.component';
import { OrderCalculationComponent } from './order-calculation/order-calculation.component';
import { WorkCalculationComponent } from './work-calculation/work-calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionOrdersComponent,
    ProductionOrders2Component,
    ProductionOrders3Component,
    OrderCalculationComponent,
    WorkCalculationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
