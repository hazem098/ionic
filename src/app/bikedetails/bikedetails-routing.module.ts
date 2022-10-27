import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikedetailsPage } from './bikedetails.page';

const routes: Routes = [
  {
    path: '',
    component: BikedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikedetailsPageRoutingModule {}
