import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantPage } from './updateRestaurant.page';

describe('UpdateRestaurantPage', () => {
  let component: UpdateRestaurantPage;
  let fixture: ComponentFixture<UpdateRestaurantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRestaurantPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
