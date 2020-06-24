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
  public authorquote = ""

  constructor(private _quoteService: QuoteService) { 
  }

  ngOnInit(): void {
    this._quoteService.getQuotes().subscribe(quoteList => this.quotes = quoteList);
    this._quoteService.getQuoteOfTheDay().subscribe((qotd) => {
      // add a check for qotd[].post_date == today then return that quote
      var q = new Date();
      var tday = new Date(q.getFullYear(),q.getMonth(),q.getDate());
      var datestr = formatDate(tday);
      console.log('datestr: '+datestr);

      // ?? need to set some default quote if the date isnt found

      for (var i = 0; i < qotd.length; i++) {
        if (datestr === qotd[i].post_date) {
          console.log('FOUND IT ' + datestr)
          // Set the quote of the day
          this.dayquote = qotd[i].quote;
          console.log('this.dayquote: ' + this.dayquote);
          this.authorquote = qotd[i].author;
        }
      }
    });

    function formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
    }
  }



  gotData(): IQuote[] {
    var dayq = null;
    return dayq;
  }

}
