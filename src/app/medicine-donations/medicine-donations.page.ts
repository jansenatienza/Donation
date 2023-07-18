import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-donations',
  templateUrl: './medicine-donations.page.html',
  styleUrls: ['./medicine-donations.page.scss'],
})
export class MedicineDonationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  makeDonation() {
    // Add your donation logic here
    console.log('Donating medicines...');
}
}