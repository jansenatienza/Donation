import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicineDonationsPage } from './medicine-donations.page';

describe('MedicineDonationsPage', () => {
  let component: MedicineDonationsPage;
  let fixture: ComponentFixture<MedicineDonationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicineDonationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
