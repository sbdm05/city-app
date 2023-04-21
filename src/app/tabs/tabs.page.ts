import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, TranslateModule],
})
export class TabsPage {

  constructor(public translate : TranslateService) {
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
}
