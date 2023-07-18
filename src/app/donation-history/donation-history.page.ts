import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.page.html',
  styleUrls: ['./donation-history.page.scss'],
})
export class DonationHistoryPage implements OnInit {

  donationHistory: any[] = [
    { donorName: 'Alice', amount: 50, date: '2023-07-01' },
    { donorName: 'Bob', amount: 75, date: '2023-06-30' },
    { donorName: 'Charlie', amount: 200, date: '2023-06-28' },
    { donorName: 'David', amount: 100, date: '2023-06-27' },
    { donorName: 'Eve', amount: 30, date: '2023-06-25' },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/dashboard');
  }
}
