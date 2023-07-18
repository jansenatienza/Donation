import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodDonationPage } from './food-donation.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDonationPageRoutingModule {}
