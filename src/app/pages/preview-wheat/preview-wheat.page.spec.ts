import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewWheatPage } from './preview-wheat.page';

describe('PreviewWheatPage', () => {
  let component: PreviewWheatPage;
  let fixture: ComponentFixture<PreviewWheatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewWheatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewWheatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
