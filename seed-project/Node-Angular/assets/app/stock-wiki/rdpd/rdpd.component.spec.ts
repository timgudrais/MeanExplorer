/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RdpdComponent } from './rdpd.component';

describe('RbbhsComponent', () => {
  let component: RdpdComponent;
  let fixture: ComponentFixture<RdpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
