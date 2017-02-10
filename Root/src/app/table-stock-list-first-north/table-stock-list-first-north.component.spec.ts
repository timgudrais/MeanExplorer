/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableStockListFirstNorthComponent } from './table-stock-list-first-north.component';

describe('TableStockListFirstNorthComponent', () => {
  let component: TableStockListFirstNorthComponent;
  let fixture: ComponentFixture<TableStockListFirstNorthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStockListFirstNorthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStockListFirstNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
