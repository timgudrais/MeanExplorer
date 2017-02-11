/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableStockListFirstNorthService } from './table-stock-list-first-north.service';

describe('TableStockListFirstNorthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableStockListFirstNorthService]
    });
  });

  it('should ...', inject([TableStockListFirstNorthService], (service: TableStockListFirstNorthService) => {
    expect(service).toBeTruthy();
  }));
});
