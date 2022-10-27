import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'annonce',
    loadChildren: () => import('./annonce/annonce.module').then( m => m.AnnoncePageModule)
  },
  {
    path: 'ajoute-annonce',
    loadChildren: () => import('./ajoute-annonce/ajoute-annonce.module').then( m => m.AjouteAnnoncePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'bikedetails',
    loadChildren: () => import('./bikedetails/bikedetails.module').then( m => m.BikedetailsPageModule)
  },
  {
    path: 'ajoute-annoncebike',
    loadChildren: () => import('./ajoute-annoncebike/ajoute-annoncebike.module').then( m => m.AjouteAnnoncebikePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
