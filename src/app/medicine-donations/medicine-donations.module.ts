import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicineDonationsPageRoutingModule } from './medicine-donations-routing.module';

import { MedicineDonationsPage } from './medicine-donations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicineDonationsPageRoutingModule
  ],
  declarations: [MedicineDonationsPage]
})
export class MedicineDonationsPageModule {}
