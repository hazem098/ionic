import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouteAnnoncebikePage } from './ajoute-annoncebike.page';

describe('AjouteAnnoncebikePage', () => {
  let component: AjouteAnnoncebikePage;
  let fixture: ComponentFixture<AjouteAnnoncebikePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteAnnoncebikePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouteAnnoncebikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
