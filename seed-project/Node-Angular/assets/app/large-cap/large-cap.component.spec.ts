/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LargeCapComponent } from './large-cap.component';

describe('TableStockListLargeCapComponent', () => {
  let component: LargeCapComponent;
  let fixture: ComponentFixture<LargeCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
