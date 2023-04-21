import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsService } from 'src/services/news.service';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsApiService } from 'src/services/news-api.service';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NewsApiEnService } from 'src/services/news-api-en.service';

@Component({
  selector: 'app-tab-actus',
  templateUrl: './tab-actus.page.html',
  styleUrls: ['./tab-actus.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, TranslateModule],
})
export class TabActusPage implements OnInit {
  public posts$!: Observable<any>;
  isModalOpen = false;

  constructor(
    private newsService: NewsService,
    private newsApiService : NewsApiService,
    public translate : TranslateService,
    private newsApiEnService : NewsApiEnService
    ) {
     if (localStorage.getItem('lang')) {
       console.log(localStorage.getItem('lang'));
       const lang = localStorage.getItem('lang');
       if (lang == 'fr') {
         console.log('en francais');
         translate.use('fr');
         this.posts$ = this.newsApiService.collection;
       } else {
         console.log('en');
         translate.use('en');
         this.posts$ = this.newsApiEnService.collection;
       }
     }
  }

  ngOnInit() {}

  ionViewWillEnter(){
     if (localStorage.getItem('lang')) {
       console.log(localStorage.getItem('lang'));
       const lang = localStorage.getItem('lang');
       if (lang == 'fr') {
         console.log('en francais');
         this.translate.use('fr');
         this.posts$ = this.newsApiService.collection;
       } else {
         console.log('en');
         this.translate.use('en');
         this.posts$ = this.newsApiEnService.collection;
       }
     }
  }

  ngOnChanges() {
    console.log('from on changes');
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ionViewDidLeave() {
    console.log('test');
    this.newsApiService.refreshCollection();
  }
}
