/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NyanComponent } from './nyan.component';

describe('NyanComponent', () => {
  let component: NyanComponent;
  let fixture: ComponentFixture<NyanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});