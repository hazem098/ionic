import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-ajoute-annonce',
  templateUrl: './ajoute-annonce.page.html',
  styleUrls: ['./ajoute-annonce.page.scss'],
})
export class AjouteAnnoncePage implements OnInit {

  constructor(private annonceServ:AnnonceService , private router:Router) { }

  ngOnInit() {
  }
  onSubmit(f) {
    console.log(f);
    this.annonceServ.addannonce(f);
    this.router.navigateByUrl('/annonce');
  }
}
