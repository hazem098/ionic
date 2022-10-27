import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouteAnnoncePageRoutingModule } from './ajoute-annonce-routing.module';

import { AjouteAnnoncePage } from './ajoute-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouteAnnoncePageRoutingModule
  ],
  declarations: [AjouteAnnoncePage]
})
export class AjouteAnnoncePageModule {}
