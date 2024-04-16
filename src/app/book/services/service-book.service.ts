import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, pipe } from 'rxjs';
import { environment } from '../../environments/environments';
import { ResponseBooksVolumen } from '../interfaces/response-books-volumen';


@Injectable({
  providedIn: 'root'
})
export class ServiceBook {

  private http = inject(HttpClient)
  private urlApi: string = environment.url
  public query:string='ingeniering'
  constructor() {
  }

  getBooksForVolumen(query:string ): Observable<ResponseBooksVolumen> {
    return this.http.get<ResponseBooksVolumen>(`${this.urlApi}?q=${query}`)
  }


}
