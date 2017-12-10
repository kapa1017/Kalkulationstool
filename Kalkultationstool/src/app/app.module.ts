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
import {BackendService} from "./Services/backend.service";
import {AuftraegeService} from "./Services/auftraege.service";
import {StartService} from "./Services/start.service";
import {StepTwoService} from "./Services/stepTwo.service";
import {StepThreeService} from "./Services/stepThree.service";
import {StepFourService} from "./Services/stepFour.service";
import {PrioService} from "./Services/prio.service";
import { AuftragsPriorisierungComponent } from './auftrags-priorisierung/auftrags-priorisierung.component';
import {TranslationService} from "app/Services/translation.service";
import {WorkService} from "./Services/work.service";
import { WarehouseDataComponent } from './warehouse-data/warehouse-data.component';
import {WarehouseService} from "app/Services/warehouse.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductionOrdersComponent,
    ProductionOrders2Component,
    ProductionOrders3Component,
    OrderCalculationComponent,
    WorkCalculationComponent,
    AuftragsPriorisierungComponent,
    WarehouseDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BackendService,
    AuftraegeService,
    StartService,
    StepTwoService,
    StepThreeService,
    StepFourService,
    PrioService,
    WarehouseService,
    TranslationService,
    WorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
