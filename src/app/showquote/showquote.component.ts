import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { IQuote } from '../quote';

@Component({
  selector: 'app-showquote',
  templateUrl: './showquote.component.html',
  styleUrls: ['./showquote.component.css']
})
export class ShowquoteComponent implements OnInit {

  public quotes = [];
  public dayquote = "";

  constructor(private _quoteService: QuoteService) { 
  }

  ngOnInit(): void {
    this._quoteService.getQuotes().subscribe(data => this.quotes = data);
    this._quoteService.getQuoteOfTheDay().subscribe(data => this.dayquote = data);
  }

}
