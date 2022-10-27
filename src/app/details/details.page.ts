import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
tab =[]
  constructor(private annonceServ: AnnonceService, private router: Router) { }

  ngOnInit() {
  this.tab = this.annonceServ.getAnnoncecar();
  }
gotoadd(){
  this.router.navigateByUrl('/ajoute-annonce')
}
}
