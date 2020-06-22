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
    this._quoteService.getQuotes().subscribe(quoteList => this.quotes = quoteList);
    this._quoteService.getQuoteOfTheDay().subscribe((qotd) => {
      // add a check for qotd[].post_date == today then return that quote
      this.dayquote = qotd[1].quote;
      console.log('this.dayquote[: ' + this.dayquote);
    });
  }

  gotData(): IQuote[] {
    var dayq = null;
    return dayq;
  }

}
