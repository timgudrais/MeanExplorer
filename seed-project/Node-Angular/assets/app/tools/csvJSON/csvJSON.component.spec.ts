/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CsvJSONComponent } from './csvJSON.component';

describe('CsvJSONComponent', () => {
  let component: CsvJSONComponent;
  let fixture: ComponentFixture<CsvJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
