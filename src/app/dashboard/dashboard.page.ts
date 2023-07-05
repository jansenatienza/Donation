// dashboard.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  searchItems() {
    // Retrieve the search term from this.searchTerm
    const searchTerm = this.searchTerm;
  }
  
  constructor() {}

}
