import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataWpService {
  headers = new HttpHeaders().set(
    'Content-Type',
    'application/json;charset=utf-8'
  );

  private urlApi: string = environment.urlApi

  public updatedDatas: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<any> {
    return this.http
      .get<any>(
        `${this.urlApi}/tribe/events/v1/events/?start_date=2023-04-01&end-date=2025-01-01`,
        { headers: this.headers }
      )
      .pipe(
        map((item) => {
          return item.events.map((obj: any) => {
            const status = { isLiked: false };
            return Object.assign(obj, status);
          });
        })
      );
  }

  getEventByDate(i: any): Observable<any> {

    return this.http
      .get<any>(
        `${this.urlApi}/tribe/events/v1/events/?start_date=${i.search_date}&end-date=${i.search_date}`
      )
      .pipe(
        map((item) => {
          return item.events.map((obj: any) => {
            const status = { isLiked: false };
            return Object.assign(obj, status);
          });
        })
      );
  }
}
