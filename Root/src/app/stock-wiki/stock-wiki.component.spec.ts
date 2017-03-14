/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockWikiComponent } from './stock-wiki.component';

describe('StockWikiComponent', () => {
  let component: StockWikiComponent;
  let fixture: ComponentFixture<StockWikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockWikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
