/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StockWikiService } from './stock-wiki.service';

describe('StockWikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockWikiService]
    });
  });

  it('should ...', inject([StockWikiService], (service: StockWikiService) => {
    expect(service).toBeTruthy();
  }));
});
