import { Component, OnInit } from '@angular/core';
import {AuftraegeService} from '../Services/auftraege.service';
import {TranslationService} from '../Services/translation.service';
import {getTranslation} from '../Utils/Translations';
import {NavigationService} from "../Services/navigation.service";

@Component({
  selector: 'app-auftrags-priorisierung',
  templateUrl: './auftrags-priorisierung.component.html',
  styleUrls: ['./auftrags-priorisierung.component.css']
})
export class AuftragsPriorisierungComponent {

  language;
  navigationStep: number;

  p1:any;
  p2:any;
  p3:any;

  splitId1: 0;
  splitId2: 0;
  prio1: 0;
  prio2: 0;
  count1: 0;
  count2: 0;

  wholeList: any = [];

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  constructor(private auftraegeService: AuftraegeService,
              private translationService: TranslationService,
              private navigationService: NavigationService) {

    auftraegeService.auftraeggeP1$.subscribe((p1:Object) => {
      this.p1 = p1;
    });
    auftraegeService.auftraeggeP2$.subscribe((p2:Object) => {
      this.p2 = p2;
    });
    auftraegeService.auftraeggeP3$.subscribe((p3:Object) => {
      this.p3 = p3;
    });
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });

    this.wholeList.push({uid:1, id: 1, item:'1', quantity: this.p1.P1,
                          batch: 1});
    this.wholeList.push({uid:2, id: 2, item:'2', quantity: this.p2.P2,
                          batch: 1});
    this.wholeList.push({uid:3, id: 3, item:'3', quantity: this.p2.P2,
                          batch: 1});

    // P1

    this.wholeList.push({uid:4, id: 51, item:'51', quantity: this.p1.E51,
      batch: 1});
    this.wholeList.push({uid:5, id: 50, item:'50', quantity: this.p1.E50,
      batch: 1});
    this.wholeList.push({uid:6, id: 4, item:'4', quantity: this.p1.E4,
      batch: 1});
    this.wholeList.push({uid:7, id: 10, item:'10', quantity: this.p1.E10,
      batch: 1});
    this.wholeList.push({uid:8, id: 49, item:'49', quantity: this.p1.E49,
      batch: 1});
    this.wholeList.push({uid:9, id: 7, item:'7', quantity: this.p1.E7,
      batch: 1});
    this.wholeList.push({uid:10, id: 13, item:'13', quantity: this.p1.E13,
      batch: 1});
    this.wholeList.push({uid:11, id: 18, item:'18', quantity: this.p1.E18,
      batch: 1});

    // P2

    this.wholeList.push({uid:12, id: 56, item:'56', quantity: this.p2.E56,
      batch: 1});
    this.wholeList.push({uid:13, id: 55, item:'55', quantity: this.p2.E55,
      batch: 1});
    this.wholeList.push({uid:14, id: 5, item:'5', quantity: this.p2.E5,
      batch: 1});
    this.wholeList.push({uid:15, id: 11, item:'11', quantity: this.p2.E11,
      batch: 1});
    this.wholeList.push({uid:16, id: 54, item:'54', quantity: this.p2.E54,
      batch: 1});
    this.wholeList.push({uid:17, id: 8, item:'8', quantity: this.p2.E8,
      batch: 1});
    this.wholeList.push({uid:18, id: 14, item:'14', quantity: this.p2.E14,
      batch: 1});
    this.wholeList.push({uid:19, id: 19, item:'19', quantity: this.p2.E19,
      batch: 1});

    // P3

    this.wholeList.push({uid:20, id: 31, item:'31', quantity: this.p3.E31,
      batch: 1});
    this.wholeList.push({uid:21, id: 30, item:'30', quantity: this.p3.E30,
      batch: 1});
    this.wholeList.push({uid:22, id: 6, item:'6', quantity: this.p3.E6,
      batch: 1});
    this.wholeList.push({uid:23, id: 12, item:'12', quantity: this.p3.E12,
      batch: 1});
    this.wholeList.push({uid:24, id: 29, item:'29', quantity: this.p3.E29,
      batch: 1});
    this.wholeList.push({uid:25, id: 9, item:'9', quantity: this.p3.E9,
      batch: 1});
    this.wholeList.push({uid:26, id: 15, item:'15', quantity: this.p3.E15,
      batch: 1});
    this.wholeList.push({uid:27, id: 20, item:'20', quantity: this.p3.E20,
      batch: 1});

    //Mehrfachverwendungsteile

    this.wholeList.push({uid:28, id: 26, item:'26', quantity: parseInt(this.p1.E26) + parseInt(this.p2.E26) + parseInt(this.p3.E26),
      batch: 1});
    this.wholeList.push({uid:29, id: 17, item:'17', quantity: parseInt(this.p1.E17) + parseInt(this.p2.E17) + parseInt(this.p3.E17),
      batch: 1});
    this.wholeList.push({uid:30, id: 16, item:'16', quantity: parseInt(this.p1.E16) + parseInt(this.p2.E16) + parseInt(this.p3.E16),
      batch: 1});

    this.wholeList.sort((a,b) => {
      return a.item - b.item;
    });

    auftraegeService.auftraegeGesamtChanged(this.wholeList);

    navigationService.isNavigation$.subscribe((newstate: number) => {
      this.navigationStep = newstate;
    });
  }

  goToNextStep(){
    this.navigationService.isNavigationChanged(5);
  }

  goToLastStep(){
    this.navigationService.isNavigationChanged(3);
  }

  splitten(event){
    this.wholeList.forEach((el) => {
      if(el.uid === parseInt(event.currentTarget.id)){
        this.prio1 = el.batch;
        this.prio2 = el.batch;
        this.count1 = el.quantity;
        this.count2 = el.quantity;
        this.splitId1 = el.id;

      }
    });
  }

  saveNewElement(){
    this.wholeList.forEach((el) => {
      if(el.id == this.splitId1){
        el.quantity = this.count1;
        el.batch = this.prio1;
      }
    });

    this.wholeList.push({uid: this.wholeList.length,
      id: this.splitId1,
      item: this.splitId1.toString(),
      quantity: this.count2,
      batch: this.prio2
    });
  }
}
