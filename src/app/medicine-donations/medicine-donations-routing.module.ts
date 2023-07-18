import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineDonationsPage } from './medicine-donations.page';

const routes: Routes = [
  {
    path: '',
    component: MedicineDonationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineDonationsPageRoutingModule {}
