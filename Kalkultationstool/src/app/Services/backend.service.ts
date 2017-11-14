import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';
import * as xml2js from 'xml2js';
import {Observable} from 'rxjs';
declare const X2JS: any;

@Injectable()
export class BackendService {

  constructor(private http: Http) {
  }

  getData(): Observable<Object> {
    return Observable.create((observer) => {
      this.http.get('../resultServlet.xml').subscribe(res => {
        var x2js = new X2JS();
        xml2js.parseString(res['_body'], function (err, result) {
          observer.next(result);
        });
      });
    });
  }
}
