/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedAlertComponent } from './shared-alert.component';

describe('SharedAlertComponent', () => {
  let component: SharedAlertComponent;
  let fixture: ComponentFixture<SharedAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
