import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IQuote } from './quote';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private _url: string = "https://prolifevoice.s3.amazonaws.com/quotes.json";
  // private _url: string = "/assets/data/quotes.json";
  private _quotes: Observable<IQuote[]>;
  private _qotd: Observable<IQuote[]>;
  
  constructor(private http: HttpClient) { }

  getQuotes(): Observable<IQuote[]>{
    this._quotes = this.http.get<IQuote[]>(this._url);
    return this._quotes;
  }

  getQuoteOfTheDay(): Observable<string>{
    var o = from("this is really cruddy");
    this._qotd = this.http.get<IQuote[]>(this._url);
    console.log("this._qotd"+this._qotd);
    // if (typeof this._qotd[0].quote.toString) {
    //   return this._qotd[0].quote.toString;
    // } else {
      return o;
    // }
  }

}
