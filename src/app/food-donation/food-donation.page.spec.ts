import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodDonationPage } from './food-donation.page';

describe('FoodDonationPage', () => {
  let component: FoodDonationPage;
  let fixture: ComponentFixture<FoodDonationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoodDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
