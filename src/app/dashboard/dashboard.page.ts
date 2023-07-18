import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {
  userName: string = 'User';
  totalDonations: number = 2050;
  lastDonationAmount: number = 100;
  searchTerm: string = '';
  recentDonations: any[] = [
    { donorName: 'Alice', amount: 50, date: '2023-07-01' },
    { donorName: 'Bob', amount: 75, date: '2023-06-30' },
    { donorName: 'Charlie', amount: 200, date: '2023-06-28' },
  ];
  currentDonation: number = 2050; // Current donation amount
  targetGoal: number = 10000; // Target donation goal
  userDonationHistory: any[] = [
    // Replace this with the actual user's donation history data from your backend or service
    { donorName: 'John Doe', amount: 50, date: '2023-07-01' },
    { donorName: 'Jane Smith', amount: 75, date: '2023-06-30' },
    { donorName: 'Michael Johnson', amount: 200, date: '2023-06-28' },
  ];

  campaigns: any[] = [
    { id: 1, name: 'Hope for Tomorrow: Empowering Lives through Education', description: 'Join us in our mission to provide quality education and empower underprivileged children to build a brighter future Hope for Tomorrow is a donation campaign aimed at breaking the cycle of poverty by ensuring access to education for children who lack the resources and opportunities they deserve', raisedAmount: 500, goalAmount: 1000 },
    { id: 2, name: 'Campaign 2', description: 'Description 2', raisedAmount: 750, goalAmount: 1500 }
  ];
  stories: any[] = [
    {
      image: 'path/to/image1.jpg',
      title: 'Title of Impact Story 1',
      description: 'Narrative describing the impact and positive changes brought about by the donations.',
      testimonial: 'Testimonial or quote from the person or community affected by the donations.'
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Title of Impact Story 2',
      description: 'Narrative describing the impact and positive changes brought about by the donations.',
      testimonial: 'Testimonial or quote from the person or community affected by the donations.'
    }
  ];

  constructor(
    private router: Router,
     private menuController: MenuController,
     private navCtrl: NavController
     ) 
     {}

  donate() {
    this.router.navigate(['/donation']);
  }

  searchItems() {
    console.log('Search term:', this.searchTerm);
  }

  makeDonation() {
    this.router.navigate(['/donation']);
    
  }
  openMenu() {
    this.menuController.open('main-content');
  }
  goToDonationHistory() {
    this.navCtrl.navigateForward('/donation-history', {
      state: { userDonationHistory: this.userDonationHistory }, // Pass the user's donation history as state
    });
}
}