/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RdpdService } from './rdpd.service';

describe('RdpdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdpdService]
    });
  });

  it('should ...', inject([RdpdService], (service: RdpdService) => {
    expect(service).toBeTruthy();
  }));
});
