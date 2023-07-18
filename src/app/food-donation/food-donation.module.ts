import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDonationPageRoutingModule } from './food-donation-routing.module';

import { FoodDonationPage } from './food-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDonationPageRoutingModule
  ],
  declarations: [FoodDonationPage]
})
export class FoodDonationPageModule {}
