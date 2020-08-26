import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../quote.service';
import { IQuote } from '../quote';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public today = Date.now();
  public dayadjust = 0;
  public items: Array<IQuote> = [];
  public searchItems: Array<IQuote> = [];
  public activeItem: IQuote;
  public datestr = "";
  private homeIndex: number;
  private searchCnt: number;
  private searchStr = "";
  

  constructor(private _quoteService: QuoteService, 
              private _Activatedroute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log("SearchResultComponent init");

    this._Activatedroute.paramMap.subscribe(params => { 
      this.searchStr = params.get('searchStr'); 
    });

    console.log("passed in str = " + this.searchStr);
    // now need to search for this.searchStr in the quotes

    this._quoteService.getQuotes().subscribe(quoteList => this.items = quoteList);
    this._quoteService.getQuoteOfTheDay().subscribe((qotd) => {
      var q = new Date();
      var tday = new Date(q.getFullYear(),q.getMonth(),q.getDate());
      this.setFirstItemFromSearch(qotd, this.searchStr);
    });
  }

  private setFirstItemFromSearch(qotd: IQuote[], searchstr: string) {
    console.log("Search all quotes for: "+ searchstr);
    this.homeIndex = 1;
    this.searchCnt = 0;
    let re = new RegExp(searchstr);
    for (var i = 0; i < qotd.length; i++) {
      if (qotd[i].quote.search(re) == -1) {
        console.log("Does not contain the search string");
      } else {
        console.log("CONTAINS the search string");
        this.searchCnt += 1;
        this.activeItem = qotd[i];
        this.homeIndex = i;
      }
    }
}

  public previous() {
    const currentIndex = this.items.indexOf(this.activeItem);
    const newIndex = currentIndex === 0 ? this.items.length - 1 : currentIndex - 1;
    this.activeItem = this.items[newIndex];
  }

  public next() {
    const currentIndex = this.items.indexOf(this.activeItem);
    const newIndex = currentIndex === this.items.length - 1 ? 0 : currentIndex + 1;
    this.activeItem = this.items[newIndex];
    console.log("next clicked ");
  }

  public home() {
    this.activeItem = this.items[this.homeIndex];
    console.log("home clicked ");
  }

}
