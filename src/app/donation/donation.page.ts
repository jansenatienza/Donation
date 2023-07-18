import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage {
  donation: any = {
    donorName: '',
    amount: '',
    paymentMethod: '',
  };

  submitDonation() {
    // Handle the form submission
    console.log('Donation submitted:', this.donation);
    // You can perform further processing, validation, or send the donation data to a backend server
  
    // Reset the form after submission
    this.donation = {
      donorName: '',
      amount: '',
      paymentMethod: '',
    };
  }
  

  constructor(private navCtrl: NavController) {}
goBack() {
  this.navCtrl.back();
}

}
