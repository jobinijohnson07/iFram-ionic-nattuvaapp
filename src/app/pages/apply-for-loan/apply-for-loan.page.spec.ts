import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForLoanPage } from './apply-for-loan.page';

describe('ApplyForLoanPage', () => {
  let component: ApplyForLoanPage;
  let fixture: ComponentFixture<ApplyForLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForLoanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
