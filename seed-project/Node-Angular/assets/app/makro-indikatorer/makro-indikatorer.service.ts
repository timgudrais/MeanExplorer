import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { MacroIndicatorModel } from "./makro-indikatorer.model";

@Injectable()
export class MacroIndicatorService {
    private macroIndicator: MacroIndicatorModel[] = [];

    constructor(private http: Http) {
    }

    getStocks() {
        return this.http.get('http://localhost:3000/message')
                .map((response: Response) => {
                    const messages = response.json().obj;
                    let transformedMessages: MacroIndicatorModel[] = [];
                    for (let message of messages) {
                        transformedMessages.push(new MacroIndicatorModel(
                            message.content,
                            message.user.firstName,
                            message._id,
                            message.user._id)
                        );
                    }
                    this.macroIndicator = transformedMessages;
                    return transformedMessages;
                })
                .catch((error: Response) => Observable.throw(error.json()));
    }

}