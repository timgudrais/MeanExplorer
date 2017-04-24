/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakroIndikatorerComponent } from './makro-indikatorer.component';

describe('MakroIndikatorerComponent', () => {
  let component: MakroIndikatorerComponent;
  let fixture: ComponentFixture<MakroIndikatorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakroIndikatorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakroIndikatorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
