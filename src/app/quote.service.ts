import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IQuote } from './quote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private _url: string = "https://prolifevoice.s3.amazonaws.com/quotes.json";
  // private _url: string = "/assets/data/quotes.json";
  private _quotes = [];

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<IQuote[]>{
    return this.http.get<IQuote[]>(this._url);
  }

  getQuoteOfTheDay(): string{
    return "return string";
  }

}
