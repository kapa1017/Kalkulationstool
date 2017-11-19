import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';

@Component({
  selector: 'app-production-orders-2',
  templateUrl: './production-orders-2.component.html',
  styleUrls: ['./production-orders-2.component.css'],
  providers: [BackendService]
})
export class ProductionOrders2Component {
  JSONData : any;

  P2 = 0;
  auftraegeP2 = 0;
  auftraegeE26 = 0;
  auftraegeE56 = 0;
  auftraegeE16 = 0;
  auftraegeE17 = 0;
  auftraegeE55 = 0;
  auftraegeE5 = 0;
  auftraegeE11 = 0;
  auftraegeE54 = 0;
  auftraegeE8 = 0;
  auftraegeE14 = 0;
  auftraegeE19 = 0;

  warehouseOldP2 = 0;
  warehouseOldE26 = 0;
  warehouseOldE56 = 0;
  warehouseOldE16 = 0;
  warehouseOldE17 = 0;
  warehouseOldE55 = 0;
  warehouseOldE5 = 0;
  warehouseOldE11 = 0;
  warehouseOldE54 = 0;
  warehouseOldE8 = 0;
  warehouseOldE14 = 0;
  warehouseOldE19 = 0;

  waitingListUebertragP2 = 0;
  waitingListUebertragE56 = 0;
  waitingListUebertragE55 = 0;
  waitingListUebertragE54 = 0;

  elementsOfP2 = [2, 5, 8, 11, 14, 16, 17, 19, 26, 54, 55, 56 ];

  constructor(backendService: BackendService) {
    backendService.getData().subscribe((data: Object) => {
      this.JSONData = data;
      this.updateValues();
    });
  }

  updateValues() {

    // Alter Lagerbestand

    this.warehouseOldP2 = this.JSONData.results.warehousestock[0].article[1].$.amount;
    this.warehouseOldE26 = this.JSONData.results.warehousestock[0].article[25].$.amount;
    this.warehouseOldE56 = this.JSONData.results.warehousestock[0].article[55].$.amount;
    this.warehouseOldE16 = this.JSONData.results.warehousestock[0].article[15].$.amount;
    this.warehouseOldE17 = this.JSONData.results.warehousestock[0].article[16].$.amount;
    this.warehouseOldE55 = this.JSONData.results.warehousestock[0].article[54].$.amount;
    this.warehouseOldE5 = this.JSONData.results.warehousestock[0].article[4].$.amount;
    this.warehouseOldE11 = this.JSONData.results.warehousestock[0].article[10].$.amount;
    this.warehouseOldE54 = this.JSONData.results.warehousestock[0].article[53].$.amount;
    this.warehouseOldE8 = this.JSONData.results.warehousestock[0].article[7].$.amount;
    this.warehouseOldE14 = this.JSONData.results.warehousestock[0].article[13].$.amount;
    this.warehouseOldE19 = this.JSONData.results.warehousestock[0].article[18].$.amount;

    //Aufträge in Warteschlange

    this.JSONData.results.waitinglistworkstations[0].workplace.forEach(el =>{
      if(el.waitinglist){
        el.waitinglist.forEach(wp => {

          if(this.elementsOfP2.indexOf(parseInt(wp.$.item)) > -1) {

            if(wp.$.item === 2){
              this.waitingListUebertragP2 = wp.$.amount;
            }else if(wp.$.item === 56){
              this.waitingListUebertragE56 = wp.$.amount;
            }else if(wp.$.item === 55){
              this.waitingListUebertragE55 = wp.$.amount;
            }else if(wp.$.item === 54){
              this.waitingListUebertragE54 = wp.$.amount;
            }

            var element  = (<HTMLInputElement>document.getElementById('inQueue' + wp.$.item));

            element.value = String(parseInt(element.value) + parseInt(wp.$.amount));
          }
        })
      }
    });

    //Aufträge in Bearbeitung

    this.JSONData.results.ordersinwork[0].workplace.forEach(el =>{
      if(el.$){
        if(this.elementsOfP2.indexOf(parseInt(el.$.item)) > -1) {
          var element  = (<HTMLInputElement>document.getElementById('inProgress' + el.$.item));

          element.value = String(parseInt(element.value) + parseInt(el.$.amount));
        }
      }
    });
  }



  updateP2() {

    debugger;

    const el =  document.getElementsByName('P2');
    const el2 =  document.getElementsByName('E26');
    const el3 =  document.getElementsByName('E56');
    const el4 =  document.getElementsByName('E16');
    const el5 =  document.getElementsByName('E17');
    const el6 =  document.getElementsByName('E55');

    const el7 =  document.getElementsByName('E5');
    const el8 =  document.getElementsByName('E11');
    const el9 =  document.getElementsByName('E54');
    const el10 =  document.getElementsByName('E8');
    const el11 =  document.getElementsByName('E14');
    const el12 =  document.getElementsByName('E19');

    this.auftraegeP2 = 0;

    for (let i = 0 ; i < el.length - 1 ; i++) {
      debugger;
      if(i !== 2){
        this.auftraegeP2 += Number((<HTMLInputElement>el[i]).value);
      }else{
        this.auftraegeP2 -= Number((<HTMLInputElement>el[i]).value);
      }
    }

    this.auftraegeE26 = this.auftraegeP2;
    this.auftraegeE56 = this.auftraegeP2;

    for (let i = 1 ; i < el2.length - 1 ; i++) {
      if(i !== 3){
        this.auftraegeE26 += Number((<HTMLInputElement>el2[i]).value);
      }else{
        this.auftraegeE26 -= Number((<HTMLInputElement>el2[i]).value);
      }
    }
    for (let i = 1 ; i < el3.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE56 += Number((<HTMLInputElement>el3[i]).value);
      }else{
        this.auftraegeE56 -= Number((<HTMLInputElement>el3[i]).value);
      }
    }

    this.auftraegeE16 = this.auftraegeE56;
    this.auftraegeE17 = this.auftraegeE56;
    this.auftraegeE55 = this.auftraegeE56;

    for (let i = 1 ; i < el4.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE16 += Number((<HTMLInputElement>el4[i]).value);
      }else{
        this.auftraegeE16 -= Number((<HTMLInputElement>el4[i]).value);
      }
    }
    for (let i = 1 ; i < el5.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE17 += Number((<HTMLInputElement>el5[i]).value);
      }else{
        this.auftraegeE17 -= Number((<HTMLInputElement>el5[i]).value);
      }
    }
    for (let i = 1 ; i < el6.length - 1 ; i++) {
      if(i !== 3){
        this.auftraegeE55 += Number((<HTMLInputElement>el6[i]).value);
      }else{
        this.auftraegeE55 -= Number((<HTMLInputElement>el6[i]).value);
      }
    }

    this.auftraegeE5 = this.auftraegeE55;
    this.auftraegeE11 = this.auftraegeE55;
    this.auftraegeE54 = this.auftraegeE55;


    for (let i = 1 ; i < el5.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE5 += Number((<HTMLInputElement>el7[i]).value);
      }else{
        this.auftraegeE5 -= Number((<HTMLInputElement>el7[i]).value);
      }
    }
    for (let i = 1 ; i < el6.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE11 += Number((<HTMLInputElement>el8[i]).value);
      }else{
        this.auftraegeE11 -= Number((<HTMLInputElement>el8[i]).value);
      }
    }
    for (let i = 1 ; i < el7.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE54 += Number((<HTMLInputElement>el9[i]).value);
      }else{
        this.auftraegeE54 -= Number((<HTMLInputElement>el9[i]).value);
      }
    }

    this.auftraegeE8 = this.auftraegeE54;
    this.auftraegeE14 = this.auftraegeE54;
    this.auftraegeE19 = this.auftraegeE54;

    for (let i = 1 ; i < el8.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE8 += Number((<HTMLInputElement>el10[i]).value);
      }else{
        this.auftraegeE8 -= Number((<HTMLInputElement>el10[i]).value);
      }
    }
    for (let i = 1 ; i < el9.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE14 += Number((<HTMLInputElement>el11[i]).value);
      }else{
        this.auftraegeE14 -= Number((<HTMLInputElement>el11[i]).value);
      }
    }
    for (let i = 1 ; i < el10.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE19 += Number((<HTMLInputElement>el12[i]).value);
      }else{
        this.auftraegeE19 -= Number((<HTMLInputElement>el12[i]).value);
      }
    }
  }
}
