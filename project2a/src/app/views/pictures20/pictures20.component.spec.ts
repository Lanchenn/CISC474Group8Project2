import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pictures20Component } from './pictures20.component';

describe('Pictures20Component', () => {
  let component: Pictures20Component;
  let fixture: ComponentFixture<Pictures20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pictures20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pictures20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
