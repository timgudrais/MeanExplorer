import { Pipe, PipeTransform } from '@angular/core';

import { StockObject } from '../models/stock.model';

@Pipe({
    name: 'stockfilter',
    pure: false
})

export class StockFilterPipe implements PipeTransform {
  transform(items: StockObject[], filter: StockObject): StockObject[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: StockObject) => this.applyFilter(item, filter));
  }
  
 /**
   * Perform the filtering.
   *
   * @param {Stock} stock The stock to compare to the filter.
   * @param {Stock} filter The filter to apply.
   * @return {boolean} True if stock satisfies filters, false if not.
   */
  applyFilter(stock: StockObject, filter: StockObject): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (stock[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (stock[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}