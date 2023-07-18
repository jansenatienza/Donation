import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClothesDonationPageRoutingModule } from './clothes-donation-routing.module';

import { ClothesDonationPage } from './clothes-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClothesDonationPageRoutingModule
  ],
  declarations: [ClothesDonationPage]
})
export class ClothesDonationPageModule {}
