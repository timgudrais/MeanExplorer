/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LargeCapService } from './large-cap.service';

describe('LargeCapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LargeCapService]
    });
  });

  it('should ...', inject([LargeCapService], (service: LargeCapService) => {
    expect(service).toBeTruthy();
  }));
});
