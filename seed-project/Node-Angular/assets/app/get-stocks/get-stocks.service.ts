import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetStocksService{

    constructor(private http: Http) {
         var obj;
         this.getJSON().subscribe(data => obj=data, error => console.log(error));
    }

    public getJSON(): Observable<any> {
         return this.http.get("assets/stocks.json")
            .map((response: Response) => {
                    console.log("stock data" + response.json());
                    return response.json();
                }
            )


                        //  .map((res:any) => JSON.stringify(res));
     }
}