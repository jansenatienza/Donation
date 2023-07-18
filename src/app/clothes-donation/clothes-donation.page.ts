import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-donation',
  templateUrl: './clothes-donation.page.html',
  styleUrls: ['./clothes-donation.page.scss'],
})
export class ClothesDonationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  makeDonation() {
    // Add your donation logic here
    console.log('Donating clothes...');
}
}