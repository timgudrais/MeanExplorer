/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RbbhsComponent } from './rbbhs.component';

describe('RbbhsComponent', () => {
  let component: RbbhsComponent;
  let fixture: ComponentFixture<RbbhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbbhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbbhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
