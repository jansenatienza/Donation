import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothesDonationPage } from './clothes-donation.page';

const routes: Routes = [
  {
    path: '',
    component: ClothesDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothesDonationPageRoutingModule {}
