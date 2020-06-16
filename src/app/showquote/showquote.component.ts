import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-showquote',
  templateUrl: './showquote.component.html',
  styleUrls: ['./showquote.component.css']
})
export class ShowquoteComponent implements OnInit {

  public quotes = [];
  public dayquote = "";

  constructor(private _quoteService: QuoteService) { }

  ngOnInit(): void {
    this._quoteService.getQuotes().subscribe(data => this.quotes = data);
    this.dayquote = this._quoteService.getQuoteOfTheDay();
  }

}
