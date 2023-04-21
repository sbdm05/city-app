import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab-faq',
  templateUrl: './tab-faq.page.html',
  styleUrls: ['./tab-faq.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule],
})
export class TabFaqPage implements OnInit {
  lang!: string;
  constructor(public translate: TranslateService) {
    if (localStorage.getItem('lang')) {
      console.log(localStorage.getItem('lang'));
      this.lang = localStorage.getItem('lang') ?? '';
      if (this.lang == 'fr') {
        console.log('en francais');
        this.lang = 'fr';
        translate.use('fr');
      } else {
        console.log('en');
        this.lang = 'en';
        translate.use('en');
      }
    }
  }

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('test');
    if (localStorage.getItem('lang')) {
      console.log(localStorage.getItem('lang'));
      this.lang = localStorage.getItem('lang') ?? '';
      if (this.lang == 'fr') {
        console.log('en francais');
        this.lang = 'fr';
      } else {
        console.log('en');
        this.lang = 'en';
      }
    }
  }
}
