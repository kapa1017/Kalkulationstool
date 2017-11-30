import { Component, OnInit } from '@angular/core';
import {AuftraegeService} from '../Services/auftraege.service';
import {TranslationService} from '../Services/translation.service';
import {getTranslation} from '../Utils/Translations';

@Component({
  selector: 'app-auftrags-priorisierung',
  templateUrl: './auftrags-priorisierung.component.html',
  styleUrls: ['./auftrags-priorisierung.component.css']
})
export class AuftragsPriorisierungComponent {

  language;

  p1:any;
  p2:any;
  p3:any;

  wholeList: any = [];

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

  constructor(private auftraegeService: AuftraegeService, translationService: TranslationService) {

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

    this.wholeList.push({ item:'1', quantity: this.p1.P1,
                          batch: 1});
    this.wholeList.push({ item:'2', quantity: this.p2.P2,
                          batch: 1});
    this.wholeList.push({ item:'3', quantity: this.p2.P2,
                          batch: 1});

    // P1

    this.wholeList.push({ item:'51', quantity: this.p1.E51,
      batch: 1});
    this.wholeList.push({ item:'50', quantity: this.p1.E50,
      batch: 1});
    this.wholeList.push({ item:'4', quantity: this.p1.E4,
      batch: 1});
    this.wholeList.push({ item:'10', quantity: this.p1.E10,
      batch: 1});
    this.wholeList.push({ item:'49', quantity: this.p1.E49,
      batch: 1});
    this.wholeList.push({ item:'7', quantity: this.p1.E7,
      batch: 1});
    this.wholeList.push({ item:'13', quantity: this.p1.E13,
      batch: 1});
    this.wholeList.push({ item:'18', quantity: this.p1.E18,
      batch: 1});

    // P2

    this.wholeList.push({ item:'56', quantity: this.p2.E56,
      batch: 1});
    this.wholeList.push({ item:'55', quantity: this.p2.E55,
      batch: 1});
    this.wholeList.push({ item:'5', quantity: this.p2.E5,
      batch: 1});
    this.wholeList.push({ item:'11', quantity: this.p2.E11,
      batch: 1});
    this.wholeList.push({ item:'54', quantity: this.p2.E54,
      batch: 1});
    this.wholeList.push({ item:'8', quantity: this.p2.E8,
      batch: 1});
    this.wholeList.push({ item:'14', quantity: this.p2.E14,
      batch: 1});
    this.wholeList.push({ item:'19', quantity: this.p2.E19,
      batch: 1});

    // P3

    this.wholeList.push({ item:'31', quantity: this.p3.E31,
      batch: 1});
    this.wholeList.push({ item:'30', quantity: this.p3.E30,
      batch: 1});
    this.wholeList.push({ item:'6', quantity: this.p3.E6,
      batch: 1});
    this.wholeList.push({ item:'12', quantity: this.p3.E12,
      batch: 1});
    this.wholeList.push({ item:'29', quantity: this.p3.E29,
      batch: 1});
    this.wholeList.push({ item:'9', quantity: this.p3.E9,
      batch: 1});
    this.wholeList.push({ item:'15', quantity: this.p3.E15,
      batch: 1});
    this.wholeList.push({ item:'20', quantity: this.p3.E20,
      batch: 1});

    //Mehrfachverwendungsteile

    this.wholeList.push({item:'26', quantity: parseInt(this.p1.E26) + parseInt(this.p2.E26) + parseInt(this.p3.E26),
      batch: 1});
    this.wholeList.push({item:'17', quantity: parseInt(this.p1.E17) + parseInt(this.p2.E17) + parseInt(this.p3.E17),
      batch: 1});
    this.wholeList.push({item:'16', quantity: parseInt(this.p1.E16) + parseInt(this.p2.E16) + parseInt(this.p3.E16),
      batch: 1});

    this.wholeList.sort((a,b) => {
      return a.item - b.item;
    });

    auftraegeService.auftraegeGesamtChanged(this.wholeList);
  }

  saveNewElement(){

    var validElements = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,26,29,30,31,49,50,51,54,55,56];

    var p1Items = [4, 7, 10, 13, 16, 17, 18, 26, 49, 50, 51 ];
    var p2Items = [5, 8, 11, 14, 16, 17, 19, 26, 54, 55, 56 ];
    var p3Items = [6, 9, 12, 15, 16, 17, 20, 26, 29, 30, 31 ];

    var item = parseInt((<HTMLInputElement>document.getElementById('itemInput')).value);
    var quantity = parseInt((<HTMLInputElement>document.getElementById('quantityInput')).value);
    var batch = parseInt((<HTMLInputElement>document.getElementById('batchInput')).value);

    if(item && quantity && batch){
      if(batch <= 0){
        alert('Die Priorisierung muss größer 0 sein');
      }else if(quantity < 1){
        alert('Der Auftrag muss größer 1 sein');
      }else if((item > 56 || item < 1) && validElements.indexOf(item) > 0){
        alert('Die Elementnummer ist nicht korrekt');
      }else{

        if(item === 1){
          this.p1.P1 = parseInt(this.p1.P1 + quantity);
        }else if(item === 2){
          this.p2.P2 = parseInt(this.p2.P2 + quantity);
        }else if(item === 3){
          this.p3.P3 = parseInt(this.p3.P3 + quantity);
        }else if(p1Items.indexOf(item)){
          this.p1['E' + item] = parseInt(this.p1['E' + item]) + quantity;
        }else if(p2Items.indexOf(item)){
          this.p2['E' + item] = parseInt(this.p2['E' + item]) + quantity;
        }else if(p3Items.indexOf(item)){
          this.p3['E' + item] = parseInt(this.p3['E' + item]) + quantity;
        }

        this.auftraegeService.auftraegeP1changed(this.p1);
        this.auftraegeService.auftraegeP2changed(this.p2);
        this.auftraegeService.auftraegeP3changed(this.p3);

        this.wholeList.push({item: String(item), quantity: String(quantity), batch: String(batch)});

        this.wholeList.sort((a,b) => {
          return a.item - b.item;
        });

        this.auftraegeService.auftraegeGesamtChanged(this.wholeList);

      }
    }else{
      alert('Die Angaben sind nicht vollständig');
    }
  }
}
