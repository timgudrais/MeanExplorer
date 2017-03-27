/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MidCapService } from './mid-cap.service';

describe('MidCapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MidCapService]
    });
  });

  it('should ...', inject([MidCapService], (service: MidCapService) => {
    expect(service).toBeTruthy();
  }));
});
