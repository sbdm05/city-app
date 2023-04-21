import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { datasAnnuaire } from '../datas-annuaire/datas';
import { catEnum } from '../datas-annuaire/cat';
import { Router } from '@angular/router';
import { MockIconPage } from '../icons/components/mock-icon/mock-icon.page';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-tab-annuaire',
  templateUrl: './tab-annuaire.page.html',
  styleUrls: ['./tab-annuaire.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MockIconPage,
    TranslateModule,
  ],
})
export class TabAnnuairePage implements OnInit {
  public catEnum = catEnum;

  constructor(private router: Router, public translate: TranslateService) {
     if (localStorage.getItem('lang')) {
       console.log(localStorage.getItem('lang'));
       const lang = localStorage.getItem('lang');
       if (lang == 'fr') {
         console.log('en francais');
         translate.use('fr');
       } else {
         console.log('en');
         translate.use('en');
       }
     }
  }

  ngOnInit() {}

  public onSelect(cat: any) {
    console.log(cat);
    const catLowerCase = cat.toLowerCase();
    // redirect avec param cat
    this.router.navigate(['content', 'tabs', 'tab-liste-by-category', catLowerCase]);
  }
}
