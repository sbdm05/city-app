import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-landing',
  templateUrl: './tab-landing.page.html',
  styleUrls: ['./tab-landing.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponent,
    TranslateModule,
  ],
})
export class TabLandingPage implements OnInit {
  public annuaire: string = 'annuaire';
  constructor(public translate: TranslateService, public router: Router) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
  }

  switchLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
    // sauvegarder dans localstorage
    localStorage.setItem('lang', lang);
    
    this.router.navigate(['content', 'tabs', 'tab1']);
  }

  ngOnInit() {}
}
