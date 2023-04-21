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

@Component({
  selector: 'app-tab-actus',
  templateUrl: './tab-actus.page.html',
  styleUrls: ['./tab-actus.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class TabActusPage implements OnInit {
  public posts$: Observable<any> = this.newsApiService.collection;
  isModalOpen = false;

  constructor(private newsService: NewsService, private newsApiService : NewsApiService) {}

  ngOnInit() {}

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
