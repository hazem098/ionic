import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-ajoute-annoncebike',
  templateUrl: './ajoute-annoncebike.page.html',
  styleUrls: ['./ajoute-annoncebike.page.scss'],
})
export class AjouteAnnoncebikePage implements OnInit {

  constructor(private annonceServ:AnnonceService , private router:Router) { }

  ngOnInit() {
  }
  onSubmit(f) {
    console.log(f);
    this.annonceServ.addannoncebike(f);
    this.router.navigateByUrl('/annonce');
}
}
