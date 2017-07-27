/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubwindowComponent } from './subwindow.component';

describe('SubwindowComponent', () => {
  let component: SubwindowComponent;
  let fixture: ComponentFixture<SubwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
