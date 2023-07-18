import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClothesDonationPage } from './clothes-donation.page';

describe('ClothesDonationPage', () => {
  let component: ClothesDonationPage;
  let fixture: ComponentFixture<ClothesDonationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClothesDonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
