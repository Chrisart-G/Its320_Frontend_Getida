import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Qoutes = {
  _id: string;
  author: string;
  title?: string;
  quotes: string;
  published: string;
};

@Injectable({
  providedIn: 'root'
})
export class QoutesService {
  constructor(private http: HttpClient) {}

  Get(): Observable<Qoutes[]> {
    return this.http.get<Qoutes[]>('http://localhost:3000/quotes/getQuotes');
  }
}
