import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private collection$: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);

  private urlApi: string = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  public refreshCollection() {
    console.log('relancé')
    this.http.get<[]>(`${this.urlApi}/wp/v2/posts`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  // get list of articles
  public get collection(): Observable<[]> {
    return this.collection$;
  }
}
