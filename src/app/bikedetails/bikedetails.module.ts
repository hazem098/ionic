import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikedetailsPageRoutingModule } from './bikedetails-routing.module';

import { BikedetailsPage } from './bikedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikedetailsPageRoutingModule
  ],
  declarations: [BikedetailsPage]
})
export class BikedetailsPageModule {}
