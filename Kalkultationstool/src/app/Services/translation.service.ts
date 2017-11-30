import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TranslationService {

  private languageSoure = new BehaviorSubject<String>('de');
  language$ = this.languageSoure.asObservable();

  isLanguageChanged(newLanguage: String) {
    this.languageSoure.next(newLanguage);
  }
}
