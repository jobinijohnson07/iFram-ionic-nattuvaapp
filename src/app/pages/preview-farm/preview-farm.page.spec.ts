import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFarmPage } from './preview-farm.page';

describe('PreviewFarmPage', () => {
  let component: PreviewFarmPage;
  let fixture: ComponentFixture<PreviewFarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFarmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
