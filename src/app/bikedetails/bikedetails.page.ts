import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-bikedetails',
  templateUrl: './bikedetails.page.html',
  styleUrls: ['./bikedetails.page.scss'],
})
export class BikedetailsPage implements OnInit {
tab=[]
  constructor(private annonceServ: AnnonceService, private router: Router) { }

  ngOnInit() {
    this.tab = this.annonceServ.getAnnoncebike();
  }
gotoadd(){
  this.router.navigateByUrl('/ajoute-annoncebike')
}
}
