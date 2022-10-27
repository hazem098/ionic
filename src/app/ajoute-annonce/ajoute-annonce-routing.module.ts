import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouteAnnoncePage } from './ajoute-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: AjouteAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouteAnnoncePageRoutingModule {}
