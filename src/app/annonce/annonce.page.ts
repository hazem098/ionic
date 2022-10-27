import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';
@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {


  constructor(private annonceServ: AnnonceService, private router: Router) { }

  ngOnInit() {
  }
gotodetails(){
  this.router.navigateByUrl('/details');
}
gotobikedetails(){
  this.router.navigateByUrl('/bikedetails');
}
}
