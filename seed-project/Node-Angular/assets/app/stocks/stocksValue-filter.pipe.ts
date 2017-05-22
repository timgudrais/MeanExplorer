import { Pipe, PipeTransform } from '@angular/core';

import { Stock } from './stock.model';

@Pipe({
    name: 'StockValuePipe',
    pure: false
})

// Tell Angular2 we're creating a Pipe with TypeScript decorators
export class StockValuePipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    if(!value) return [];
    // ES6 array destructuring
    let [minValue] = args;
    return value.filter(stock => {
      return stock.Aktiekurs >= minValue;
    });
  }

}