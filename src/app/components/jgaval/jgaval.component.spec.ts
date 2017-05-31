/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JgavalComponent } from './jgaval.component';

describe('JgavalComponent', () => {
  let component: JgavalComponent;
  let fixture: ComponentFixture<JgavalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JgavalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JgavalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
