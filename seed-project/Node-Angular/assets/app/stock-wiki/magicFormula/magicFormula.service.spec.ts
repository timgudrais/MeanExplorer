/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MagicFormulaService } from './magicFormula.service';

describe('MagicFormulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagicFormulaService]
    });
  });

  it('should ...', inject([MagicFormulaService], (service: MagicFormulaService) => {
    expect(service).toBeTruthy();
  }));
});
