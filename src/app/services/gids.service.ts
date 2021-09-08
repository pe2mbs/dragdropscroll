import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IMetaData } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class GidsService {

  constructor(
    protected http: HttpClient
  ) { }

  /**
   * Gets all programs of yoday
   * @returns Array of programs
   */
  public getTodayPrograms$(): Observable<any> {
    return this.http.get('https://online.192tv.tv/Backend.svc/getepg')
      .pipe(
        retry(3),
        tap({
          next: data => console.log('Received: ', data),
          error: error => console.error('Oeps: ', error)
        }),
        map(function (value: any) {
          return value.MetaData.filter(isTodayFilter());
        }),
        catchError(
          error => {
            console.error('Oeps: ', error)
            return throwError(error);
          }
        )
      )
  }
}

/**
 * Filters only programs from today
 * @returns  boolean
 */
function isTodayFilter() {
  return function (item: IMetaData): boolean {
    const today = new Date().toDateString();
    const programDate = new Date(item.PubDate).toDateString();
    if (today == programDate) return true;
    return false;
  }
}
