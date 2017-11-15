import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';

@Component({
  selector: 'app-production-orders',
  templateUrl: './production-orders.component.html',
  styleUrls: ['./production-orders.component.css'],
  providers: [BackendService]
})
export class ProductionOrdersComponent {

  JSONData = {};

  P1 = 0;
  auftraegeP1 = 0;
  auftraegeE26 = 0;
  auftraegeE51 = 0;
  auftraegeE16 = 0;
  auftraegeE17 = 0;
  auftraegeE50 = 0;
  auftraegeE4 = 0;
  auftraegeE10 = 0;
  auftraegeE49 = 0;
  auftraegeE7 = 0;
  auftraegeE13 = 0;
  auftraegeE18 = 0;

  warehouseOldP1 = 0;
  warehouseOldE26 = 0;
  warehouseOldE51 = 0;
  warehouseOldE16 = 0;
  warehouseOldE17 = 0;
  warehouseOldE50 = 0;
  warehouseOldE4 = 0;
  warehouseOldE10 = 0;
  warehouseOldE49 = 0;
  warehouseOldE7 = 0;
  warehouseOldE13 = 0;
  warehouseOldE18 = 0;

  elementsOfP1 = [1, 4, 7, 10, 13, 16, 17, 18, 26, 49, 50, 51 ];

  constructor(backendService: BackendService) {
    backendService.getData().subscribe((data: Object) => {
      this.JSONData = data;
      this.updateValues();
    });
  }

  updateValues() {

    // Alter Lagerbestand

    this.warehouseOldP1 = this.JSONData.results.warehousestock[0].article[0].$.amount;
    this.warehouseOldE26 = this.JSONData.results.warehousestock[0].article[25].$.amount;
    this.warehouseOldE51 = this.JSONData.results.warehousestock[0].article[50].$.amount;
    this.warehouseOldE16 = this.JSONData.results.warehousestock[0].article[15].$.amount;
    this.warehouseOldE17 = this.JSONData.results.warehousestock[0].article[16].$.amount;
    this.warehouseOldE50 = this.JSONData.results.warehousestock[0].article[49].$.amount;
    this.warehouseOldE4 = this.JSONData.results.warehousestock[0].article[3].$.amount;
    this.warehouseOldE10 = this.JSONData.results.warehousestock[0].article[9].$.amount;
    this.warehouseOldE49 = this.JSONData.results.warehousestock[0].article[48].$.amount;
    this.warehouseOldE7 = this.JSONData.results.warehousestock[0].article[6].$.amount;
    this.warehouseOldE13 = this.JSONData.results.warehousestock[0].article[12].$.amount;
    this.warehouseOldE18 = this.JSONData.results.warehousestock[0].article[17].$.amount;

    //Aufträge in Warteschlange

    this.JSONData.results.waitinglistworkstations[0].workplace.forEach(el =>{
      if(el.waitinglist){
        el.waitinglist.forEach(wp => {

          if(this.elementsOfP1.indexOf(parseInt(wp.$.item)) > -1) {
            var element  = document.getElementById('inQueue' + wp.$.item);

            element.value = parseInt(element.value) + parseInt(wp.$.amount);
          }
        })
      }
    })
  }

  

  updateP1() {

    debugger;

    const el =  document.getElementsByName('P1');
    const el2 =  document.getElementsByName('E26');
    const el3 =  document.getElementsByName('E51');
    const el4 =  document.getElementsByName('E16');
    const el5 =  document.getElementsByName('E17');
    const el6 =  document.getElementsByName('E50');

    const el7 =  document.getElementsByName('E4');
    const el8 =  document.getElementsByName('E10');
    const el9 =  document.getElementsByName('E49');
    const el10 =  document.getElementsByName('E7');
    const el11 =  document.getElementsByName('E13');
    const el12 =  document.getElementsByName('E18');

    this.auftraegeP1 = 0;

    for (let i = 0 ; i < el.length - 1 ; i++) {
      this.auftraegeP1 += Number((<HTMLInputElement>el[i]).value);
    }

    this.auftraegeE26 = this.auftraegeP1;
    this.auftraegeE51 = this.auftraegeP1;

    for (let i = 1 ; i < el2.length - 1 ; i++) {
      this.auftraegeE26 += Number((<HTMLInputElement>el2[i]).value);
    }
    for (let i = 1 ; i < el3.length - 1; i++) {
      this.auftraegeE51 += Number((<HTMLInputElement>el3[i]).value);
    }

    this.auftraegeE16 = this.auftraegeE51;
    this.auftraegeE17 = this.auftraegeE51;
    this.auftraegeE50 = this.auftraegeE51;

    for (let i = 1 ; i < el4.length - 1; i++) {
      this.auftraegeE16 += Number((<HTMLInputElement>el4[i]).value);
    }
    for (let i = 1 ; i < el5.length - 1; i++) {
      this.auftraegeE17 += Number((<HTMLInputElement>el5[i]).value);
    }
    for (let i = 1 ; i < el6.length - 1 ; i++) {
      this.auftraegeE50 += Number((<HTMLInputElement>el6[i]).value);
    }

    this.auftraegeE4 = this.auftraegeE50;
    this.auftraegeE10 = this.auftraegeE50;
    this.auftraegeE49 = this.auftraegeE50;


    for (let i = 1 ; i < el5.length - 1; i++) {
      this.auftraegeE4 += Number((<HTMLInputElement>el7[i]).value);
    }
    for (let i = 1 ; i < el6.length - 1; i++) {
      this.auftraegeE10 += Number((<HTMLInputElement>el8[i]).value);
    }
    for (let i = 1 ; i < el7.length - 1; i++) {
      this.auftraegeE49 += Number((<HTMLInputElement>el9[i]).value);
    }

    this.auftraegeE7 = this.auftraegeE49;
    this.auftraegeE13 = this.auftraegeE49;
    this.auftraegeE18 = this.auftraegeE49;

    for (let i = 1 ; i < el8.length - 1; i++) {
      this.auftraegeE7 += Number((<HTMLInputElement>el10[i]).value);
    }
    for (let i = 1 ; i < el9.length - 1; i++) {
      this.auftraegeE13 += Number((<HTMLInputElement>el11[i]).value);
    }
    for (let i = 1 ; i < el10.length - 1; i++) {
      this.auftraegeE18 += Number((<HTMLInputElement>el12[i]).value);
    }
  }
}
