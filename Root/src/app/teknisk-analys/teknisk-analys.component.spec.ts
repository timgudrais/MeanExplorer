/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TekniskAnalysComponent } from './teknisk-analys.component';

describe('TekniskAnalysComponent', () => {
  let component: TekniskAnalysComponent;
  let fixture: ComponentFixture<TekniskAnalysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekniskAnalysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekniskAnalysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
