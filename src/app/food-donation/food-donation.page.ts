import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-donation',
  templateUrl: './food-donation.page.html',
  styleUrls: ['./food-donation.page.scss'],
})
export class FoodDonationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  makeDonation() {
    // Add your donation logic here
    console.log('Donating food...');
}
}