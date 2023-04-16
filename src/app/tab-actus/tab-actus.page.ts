import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsService } from 'src/services/news.service';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-actus',
  templateUrl: './tab-actus.page.html',
  styleUrls: ['./tab-actus.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TabActusPage implements OnInit {
  public posts$: Observable<any> = this.newsService.collection;
  isModalOpen = false;

  constructor(private newsService: NewsService) {}

  ngOnInit() {}

  ngOnChanges() {
    console.log('from on changes');
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ionViewDidLeave() {
    console.log('test');
    this.newsService.refreshCollection();
  }
}
