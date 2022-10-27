import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouteAnnoncebikePageRoutingModule } from './ajoute-annoncebike-routing.module';

import { AjouteAnnoncebikePage } from './ajoute-annoncebike.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouteAnnoncebikePageRoutingModule
  ],
  declarations: [AjouteAnnoncebikePage]
})
export class AjouteAnnoncebikePageModule {}
