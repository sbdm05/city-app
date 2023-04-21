import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsApiEnService {
  private collection$: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);

  private urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection() {
    this.http
      .get<any[]>(
        'https://newsapi.org/v2/top-headlines?language=en&category=sports&apiKey=eb19574900b84eb1aa4e059e20c80531'
      )
      .subscribe((data: any) => {
        this.collection$.next(data.articles);
      });
  }

  // get list of articles
  public get collection(): Observable<[]> {
    return this.collection$;
  }
}
