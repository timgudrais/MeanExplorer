/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MidCapComponent } from './mid-cap.component';

describe('TableStockListMidCapComponent', () => {
  let component: MidCapComponent;
  let fixture: ComponentFixture<MidCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
