import { Component, OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {

  ngOnInit() {
  }

  private stockListUrl = 'https://www.avanza.se/aktier/lista.html';  // URL to web API
  constructor (private http: Http) {}

  getStocks() {
    console.log("just doing it...");
    var x = new XMLHttpRequest();
    x.open("GET", "http://www.avanza.se/aktier/lista.html", true);
    x.onreadystatechange = function () {
      if (x.readyState == 4 && x.status == 200)
      {
        var doc = x.responseXML;
        console.log(doc);
        // …
      }
    };
    x.send(null);

    return this.http.get(this.stockListUrl)
                    .catch(this.handleError);
  }

  logParsedData() {
    var parsedData = this.getStocks();
    console.log(parsedData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}