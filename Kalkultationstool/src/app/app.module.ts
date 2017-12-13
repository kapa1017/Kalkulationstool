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
import {BackendService} from './Services/backend.service';
import {AuftraegeService} from './Services/auftraege.service';
import { AuftragsPriorisierungComponent } from './auftrags-priorisierung/auftrags-priorisierung.component';
import {TranslationService} from 'app/Services/translation.service';
import {WorkService} from './Services/work.service';
import { WarehouseDataComponent } from './warehouse-data/warehouse-data.component';
import {WarehouseService} from 'app/Services/warehouse.service';
import {KpiService} from 'app/Services/kpi.service';
import {NavigationService} from 'app/Services/navigation.service';
import {ResultService} from 'app/Services/result.service';
import { ResultComponent } from './result/result.component';
import { KpiComponent } from './kpi/kpi.component';
import { XmlSelectorComponent } from './xml-selector/xml-selector.component';
import {InitService} from 'app/Services/init.service';
import {OrderService} from './Services/order.service';
import { OrderCalculationStep2Component } from './order-calculation-step2/order-calculation-step2.component';

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
    ResultComponent,
    KpiComponent,
    XmlSelectorComponent,
    OrderCalculationStep2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BackendService,
    AuftraegeService,
    NavigationService,
    ResultService,
    KpiService,
    OrderService,
    WarehouseService,
    TranslationService,
    InitService,
    WorkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
