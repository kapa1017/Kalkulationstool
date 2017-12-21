import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import * as xml2js from 'xml2js';
import {Observable} from 'rxjs';

@Injectable()
export class BackendService {

  constructor(private http: Http) {
  }

  private selectedIdSource = new BehaviorSubject<String>('');

  selectedId$ = this.selectedIdSource.asObservable();

  idChanged(newState: String) {
    this.selectedIdSource.next(newState);
  }

  getData(id): Observable<Object> {
    return Observable.create((observer) => {
      this.http.get('http://localhost:3000/element/' + id ).subscribe(res => {

        xml2js.parseString(JSON.parse(res['_body']).xmlData, function (err, result) {
          console.log(result);
          observer.next(result);
        });
      })
    });
  }

  getAllFiles(): Observable<Object> {
    return Observable.create((observer) => {
      this.http.get('http://localhost:3000/element/').subscribe(res => {
        observer.next(JSON.parse(res['_body']));
        debugger;
      })
    });
  }

}
