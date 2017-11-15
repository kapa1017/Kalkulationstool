import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import * as xml2js from 'xml2js';
import {Observable} from 'rxjs';

@Injectable()
export class BackendService {

  constructor(private http: Http) {
  }

  getData(): Observable<Object> {
    return Observable.create((observer) => {
      this.http.get('../../assets/resultServlet.xml').subscribe(res => {
        xml2js.parseString(res['_body'], function (err, result) {
          console.log(result);
          observer.next(result);
        });
      });
    });
  }
}
