import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouteAnnoncebikePage } from './ajoute-annoncebike.page';

const routes: Routes = [
  {
    path: '',
    component: AjouteAnnoncebikePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouteAnnoncebikePageRoutingModule {}
