import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pictures21Component } from './pictures21.component';

describe('Pictures21Component', () => {
  let component: Pictures21Component;
  let fixture: ComponentFixture<Pictures21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pictures21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pictures21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
