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
  expanded: boolean = false;
 
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
    { id: 2, name: 'Hopeful Hearts: Empowering Lives through Compassionate Donations', description: 'Hopeful Hearts is a beacon of hope in a world that often faces adversity. Through compassionate donations and collaborative efforts, we can uplift lives, restore dignity, and create a better future for all. Each act of generosity is a testament to the power of human kindness and the potential for transformative change. Let us unite under the banner of Hopeful Hearts and sow seeds of compassion and hope, enriching lives and brightening the world one donation at a time.', raisedAmount: 750, goalAmount: 1500 }
  ];
  stories: any[] = [
    {
      title: 'Title: "A Beacon of Hope: Transforming Lives Through Generosity"',
      description: 'Title: "A Beacon of Hope: Transforming Lives Through Generosity"is a powerful testament to the impact of generous donations on the lives of individuals and communities. This narrative explores the profound positive changes that unfolded as a result of compassionate giving, shining a light on the transformative power of kindness and empathy.The Journey of Empowerment:In a remote village nestled amidst lush greenery, the community struggled to access basic amenities and educational opportunities. However, this changed when Hopeful Hearts stepped in with its transformative campaign. Through the collective efforts of generous donors, educational facilities were established, scholarships were awarded, and vocational training programs were initiated.As a direct result of these donations, the children in the village received an opportunity they had long yearned for - access to quality education. Schools that were once mere dreams now stood tall, offering knowledge and empowerment to the young minds of the village. The impact was immediate, and the students eyes sparkled with newfound hope and determination. Breaking Barriers and Creating Leaders:One shining example is the story of Rina, a bright and determined young girl whose dreams were bound by financial constraints. However, with the support of the Hopeful Hearts scholarship, Rinas life took a dramatic turn. She excelled in her studies and blossomed into a confident leader within her community. With newfound knowledge and opportunities, Rina aspired to create a better future not only for herself but for her entire village.Testimonial of Transformation:Rinas testimony reflects the profound impact of the donations on her life and the lives of her fellow villagers. She shared, "Before Hopeful Hearts, I felt like my dreams were just distant stars. But today, I see them as constellations guiding me towards a brighter future. The scholarship not only lifted the financial burden from my family but also ignited a flame of determination within me. I am forever grateful to the donors who believed in me and changed the course of my life.Community Upliftment:Beyond education, the impact of Hopeful Hearts extended to uplift the entire community. Sustainable projects such as clean water initiatives and agricultural development contributed to improved living conditions. With access to clean water, health conditions improved, and women no longer had to walk miles to fetch water for their families. The village began to prosper, and the sense of unity and collective progress filled the air.,testimonial:Testimonial or quote from the person or community affected by the donations.'
      
    },
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
    
  
  openMenu() {
    this.menuController.open('main-content');
  }
  goToDonationHistory() {
    this.navCtrl.navigateForward('/donation-history', {
      state: { userDonationHistory: this.userDonationHistory }, // Pass the user's donation history as state
    });
}
makeDonation() {
  // Navigate to the donation page (you can replace 'DonationPage' with the actual page path)
  this.navCtrl.navigateForward('/donation');
}

makeFoodDonation() {
  // Navigate to the food donation page (you can replace 'FoodDonationPage' with the actual page path)
  this.navCtrl.navigateForward('/food-donation');
}

donateClothes() {
  // Navigate to the clothes donation page (you can replace 'ClothesDonationPage' with the actual page path)
  this.navCtrl.navigateForward('/clothes-donation');
}
donateMedicines() {
  this.navCtrl.navigateForward('/medicine-donations');
}
toggleExpand() {
  this.expanded = !this.expanded;
}
}