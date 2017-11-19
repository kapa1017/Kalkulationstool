import { Component, OnInit } from '@angular/core';
import {BackendService} from '../Services/backend.service';

@Component({
  selector: 'app-production-orders-3',
  templateUrl: './production-orders-3.component.html',
  styleUrls: ['./production-orders-3.component.css']
})
export class ProductionOrders3Component {
  JSONData : any;

  P3 = 0;
  auftraegeP3 = 0;
  auftraegeE26 = 0;
  auftraegeE31 = 0;
  auftraegeE16 = 0;
  auftraegeE17 = 0;
  auftraegeE30 = 0;
  auftraegeE6 = 0;
  auftraegeE12 = 0;
  auftraegeE29 = 0;
  auftraegeE9 = 0;
  auftraegeE15 = 0;
  auftraegeE20 = 0;

  warehouseOldP3 = 0;
  warehouseOldE26 = 0;
  warehouseOldE31 = 0;
  warehouseOldE16 = 0;
  warehouseOldE17 = 0;
  warehouseOldE30 = 0;
  warehouseOldE6 = 0;
  warehouseOldE12 = 0;
  warehouseOldE29 = 0;
  warehouseOldE9 = 0;
  warehouseOldE15 = 0;
  warehouseOldE20 = 0;

  waitingListUebertragP3 = 0;
  waitingListUebertragE31 = 0;
  waitingListUebertragE30 = 0;
  waitingListUebertragE29 = 0;

  elementsOfP2 = [3, 6, 9, 12, 15, 16, 17, 20, 26, 29, 30, 31 ];

  constructor(backendService: BackendService) {
    backendService.getData().subscribe((data: Object) => {
      this.JSONData = data;
      this.updateValues();
    });
  }

  updateValues() {

    // Alter Lagerbestand

    this.warehouseOldP3 = this.JSONData.results.warehousestock[0].article[2].$.amount;
    this.warehouseOldE26 = this.JSONData.results.warehousestock[0].article[25].$.amount;
    this.warehouseOldE31 = this.JSONData.results.warehousestock[0].article[30].$.amount;
    this.warehouseOldE16 = this.JSONData.results.warehousestock[0].article[15].$.amount;
    this.warehouseOldE17 = this.JSONData.results.warehousestock[0].article[16].$.amount;
    this.warehouseOldE30 = this.JSONData.results.warehousestock[0].article[29].$.amount;
    this.warehouseOldE6 = this.JSONData.results.warehousestock[0].article[5].$.amount;
    this.warehouseOldE12 = this.JSONData.results.warehousestock[0].article[11].$.amount;
    this.warehouseOldE29 = this.JSONData.results.warehousestock[0].article[28].$.amount;
    this.warehouseOldE9 = this.JSONData.results.warehousestock[0].article[8].$.amount;
    this.warehouseOldE15 = this.JSONData.results.warehousestock[0].article[14].$.amount;
    this.warehouseOldE20 = this.JSONData.results.warehousestock[0].article[19].$.amount;

    //Aufträge in Warteschlange

    this.JSONData.results.waitinglistworkstations[0].workplace.forEach(el =>{
      if(el.waitinglist){
        el.waitinglist.forEach(wp => {

          if(this.elementsOfP2.indexOf(parseInt(wp.$.item)) > -1) {

            if(wp.$.item === 3){
              this.waitingListUebertragP3 = wp.$.amount;
            }else if(wp.$.item === 31){
              this.waitingListUebertragE31 = wp.$.amount;
            }else if(wp.$.item === 30){
              this.waitingListUebertragE30 = wp.$.amount;
            }else if(wp.$.item === 29){
              this.waitingListUebertragE29 = wp.$.amount;
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



  updateP3() {

    const el =  document.getElementsByName('P3');
    const el2 =  document.getElementsByName('E26');
    const el3 =  document.getElementsByName('E31');
    const el4 =  document.getElementsByName('E16');
    const el5 =  document.getElementsByName('E17');
    const el6 =  document.getElementsByName('E30');

    const el7 =  document.getElementsByName('E6');
    const el8 =  document.getElementsByName('E12');
    const el9 =  document.getElementsByName('E29');
    const el10 =  document.getElementsByName('E9');
    const el11 =  document.getElementsByName('E15');
    const el12 =  document.getElementsByName('E20');

    this.auftraegeP3 = 0;

    for (let i = 0 ; i < el.length - 1 ; i++) {
      if(i !== 2){
        this.auftraegeP3 += Number((<HTMLInputElement>el[i]).value);
      }else{
        this.auftraegeP3 -= Number((<HTMLInputElement>el[i]).value);
      }
    }

    this.auftraegeE26 = this.auftraegeP3;
    this.auftraegeE31 = this.auftraegeP3;

    for (let i = 1 ; i < el2.length - 1 ; i++) {
      if(i !== 3){
        this.auftraegeE26 += Number((<HTMLInputElement>el2[i]).value);
      }else{
        this.auftraegeE26 -= Number((<HTMLInputElement>el2[i]).value);
      }
    }
    for (let i = 1 ; i < el3.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE31 += Number((<HTMLInputElement>el3[i]).value);
      }else{
        this.auftraegeE31 -= Number((<HTMLInputElement>el3[i]).value);
      }
    }

    this.auftraegeE16 = this.auftraegeE31;
    this.auftraegeE17 = this.auftraegeE31;
    this.auftraegeE30 = this.auftraegeE31;

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
        this.auftraegeE30 += Number((<HTMLInputElement>el6[i]).value);
      }else{
        this.auftraegeE30 -= Number((<HTMLInputElement>el6[i]).value);
      }
    }

    this.auftraegeE6 = this.auftraegeE30;
    this.auftraegeE12 = this.auftraegeE30;
    this.auftraegeE29 = this.auftraegeE30;


    for (let i = 1 ; i < el5.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE6 += Number((<HTMLInputElement>el7[i]).value);
      }else{
        this.auftraegeE6 -= Number((<HTMLInputElement>el7[i]).value);
      }
    }
    for (let i = 1 ; i < el6.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE12 += Number((<HTMLInputElement>el8[i]).value);
      }else{
        this.auftraegeE12 -= Number((<HTMLInputElement>el8[i]).value);
      }
    }
    for (let i = 1 ; i < el7.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE29 += Number((<HTMLInputElement>el9[i]).value);
      }else{
        this.auftraegeE29 -= Number((<HTMLInputElement>el9[i]).value);
      }
    }

    this.auftraegeE9 = this.auftraegeE29;
    this.auftraegeE15 = this.auftraegeE29;
    this.auftraegeE20 = this.auftraegeE29;

    for (let i = 1 ; i < el8.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE9 += Number((<HTMLInputElement>el10[i]).value);
      }else{
        this.auftraegeE9 -= Number((<HTMLInputElement>el10[i]).value);
      }
    }
    for (let i = 1 ; i < el9.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE15 += Number((<HTMLInputElement>el11[i]).value);
      }else{
        this.auftraegeE15 -= Number((<HTMLInputElement>el11[i]).value);
      }
    }
    for (let i = 1 ; i < el10.length - 1; i++) {
      if(i !== 3){
        this.auftraegeE20 += Number((<HTMLInputElement>el12[i]).value);
      }else{
        this.auftraegeE20 -= Number((<HTMLInputElement>el12[i]).value);
      }
    }
  }

}
