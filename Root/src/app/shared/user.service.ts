import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getFirstNorthData() {
    return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.nasdaqomxnordic.com%2Faktier%2Flisted-companies%2Fnordic-mid-cap%22%20and%20xpath%3D'%2F%2Fsection%2Fdiv%2Fdiv%2Fdiv%2Fsection%2Farticle%2Fdiv%2Fdiv%2Ftable'&format=json&callback=`)
    .map((res:Response) => res.json());
  }

  getSmallCapData() {
    return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.nasdaqomxnordic.com%2Faktier%2Flisted-companies%2Fnordic-small-cap%22%20and%20xpath%3D'%2F%2Fsection%2Fdiv%2Fdiv%2Fdiv%2Fsection%2Farticle%2Fdiv%2Fdiv%2Ftable'&format=json&callback=`)
    .map((res:Response) => res.json());
  }

  getMidCapData() {
    return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.nasdaqomxnordic.com%2Faktier%2Flisted-companies%2Fnordic-mid-cap%22%20and%20xpath%3D'%2F%2Fsection%2Fdiv%2Fdiv%2Fdiv%2Fsection%2Farticle%2Fdiv%2Fdiv%2Ftable'&format=json&callback=`)
    .map((res:Response) => res.json());
  }

  getLargeCapData() {
    return this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fwww.nasdaqomxnordic.com%2Faktier%2Flisted-companies%2Fnordic-mid-cap%22%20and%20xpath%3D'%2F%2Fsection%2Fdiv%2Fdiv%2Fdiv%2Fsection%2Farticle%2Fdiv%2Fdiv%2Ftable'&format=json&callback=`)
    .map((res:Response) => res.json());
  }

}