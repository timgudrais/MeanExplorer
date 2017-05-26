/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirstNorthService } from './first-north.service';

describe('TableStockListFirstNorthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstNorthService]
    });
  });

  it('should ...', inject([FirstNorthService], (service: FirstNorthService) => {
    expect(service).toBeTruthy();
  }));
});
