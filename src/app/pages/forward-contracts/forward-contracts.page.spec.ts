import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardContractsPage } from './forward-contracts.page';

describe('ForwardContractsPage', () => {
  let component: ForwardContractsPage;
  let fixture: ComponentFixture<ForwardContractsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardContractsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardContractsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
