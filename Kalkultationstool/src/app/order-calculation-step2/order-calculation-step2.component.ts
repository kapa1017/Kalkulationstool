import { Component} from '@angular/core';
import {getTranslation} from "app/Utils/Translations";
import {TranslationService} from "../Services/translation.service";

@Component({
  selector: 'app-order-calculation-step2',
  templateUrl: './order-calculation-step2.component.html',
  styleUrls: ['./order-calculation-step2.component.css']
})
export class OrderCalculationStep2Component {

  language;

  constructor(private translationService: TranslationService) {
    translationService.language$.subscribe((lang: String) => {
      this.language = lang;
    });
  }

  getTrans(phrase){
    return getTranslation(phrase, this.language);
  }

}
