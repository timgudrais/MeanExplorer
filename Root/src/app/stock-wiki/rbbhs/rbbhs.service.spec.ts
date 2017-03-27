/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RbbhsService } from './rbbhs.service';

describe('RbbhsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RbbhsService]
    });
  });

  it('should ...', inject([RbbhsService], (service: RbbhsService) => {
    expect(service).toBeTruthy();
  }));
});
