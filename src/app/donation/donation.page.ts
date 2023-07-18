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
   
    console.log('Donation submitted:', this.donation);
    this.donationSubmitted = true;
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
donationSubmitted: boolean = false;


}
