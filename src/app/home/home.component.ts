import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../quote.service';
import { IQuote } from '../quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public today = Date.now();
  public id = "";
  public dayadjust = 0;
  public items: Array<IQuote> = [];
  public activeItem: IQuote;
  public dayquote = "";
  public authorquote = ""
  public datestr = "";
  private homeIndex: number;

  constructor(private _quoteService: QuoteService, private _Activatedroute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log("HomeComponent init");

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });

    console.log("passed in id = " + this.id);

    // work on this https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/

    // console.log(params.get('id'));
    this._quoteService.getQuotes().subscribe(quoteList => this.items = quoteList);
    this._quoteService.getQuoteOfTheDay().subscribe((qotd) => {
      // add a check for qotd[].post_date == today then return that quote
      var q = new Date();

      var tday = new Date(q.getFullYear(),q.getMonth(),q.getDate());
      var x = this.id;
      var y: number = +x;
      this.dayadjust = this.dayadjust + y;
      console.log("dayadjust = " + this.dayadjust);
      var datestr = this.formatDate(tday, y);
      console.log('datestr: '+datestr);
      this.setQuoteAndAuthor(qotd, datestr);
       
    });
  }

  private setQuoteAndAuthor(qotd: IQuote[], datestr: string) {      
    // ?? need to set some default quote if the date isnt found
    for (var i = 0; i < qotd.length; i++) {
      if (datestr === qotd[i].post_date) {
        console.log('FOUND IT ' + datestr);
        // Set the quote of the day
        this.dayquote = qotd[i].quote;
        console.log('this.dayquote: ' + this.dayquote);
        this.authorquote = qotd[i].author;
        this.activeItem = qotd[i];
        this.homeIndex = i;
      }
    }
  }

  private formatDate(date, adjust) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + adjust),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
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
