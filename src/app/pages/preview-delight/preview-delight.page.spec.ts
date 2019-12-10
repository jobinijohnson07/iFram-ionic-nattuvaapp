import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDelightPage } from './preview-delight.page';

describe('PreviewDelightPage', () => {
  let component: PreviewDelightPage;
  let fixture: ComponentFixture<PreviewDelightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewDelightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDelightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
