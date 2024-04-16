import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, pipe } from 'rxjs';
import { environment } from '../../environments/environments';
import { ResponseBooksVolumen } from '../interfaces/response-books-volumen';

@Injectable({
  providedIn: 'root',
})
export class ServiceBook {
  private currentBookSubject: BehaviorSubject<string> = new BehaviorSubject('');
  public readonly currentBook: Observable<string> =
    this.currentBookSubject.asObservable(); // currentBook es el valor que quieres leer

  private http = inject(HttpClient);
  private urlApi: string = environment.url;
  public query: string = 'ingeniering';

  constructor() {}

  // con esta fn seteas el valor que deseas
  setCurrentUser(book: string): void {
    this.currentBookSubject.next(book);
  }

  getBooksForVolumen(query: string): Observable<ResponseBooksVolumen> {
    return this.http.get<ResponseBooksVolumen>(`${this.urlApi}?q=${query}`);
  }
}
