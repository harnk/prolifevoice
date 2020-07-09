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
  public dayadjust = 0;
  public items: Array<IQuote> = [];
  public activeItem: IQuote;
  public datestr = "";
  private homeIndex: number;
  private currentIndex: number;

  constructor(private _quoteService: QuoteService, private _Activatedroute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log("HomeComponent init");
    this._quoteService.getQuotes().subscribe(quoteList => this.items = quoteList);
    this._quoteService.getQuoteOfTheDay().subscribe((qotd) => {
      var q = new Date();
      var tday = new Date(q.getFullYear(),q.getMonth(),q.getDate());
      var datestr = this.formatDate(tday);
      console.log('datestr: '+datestr);
      this.setActiveItemForToday(qotd, datestr);
    });
  }

  private setActiveItemForToday(qotd: IQuote[], datestr: string) {      
    this.homeIndex = 1; // default of date not found
    for (var i = 0; i < qotd.length; i++) {
      if (datestr === qotd[i].post_date) {
        console.log('FOUND IT ' + datestr);
        this.activeItem = qotd[i];
        this.homeIndex = i;
        this.currentIndex = i;
      }
    }
  }

  private formatDate(date) {
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

  public previous() {
    const currentIndex = this.currentIndex;
    const newIndex = currentIndex === 0 ? this.items.length - 1 : currentIndex - 1;
    this.activeItem = this.items[newIndex];
    this.currentIndex = newIndex;
  }

  public next() {
    const currentIndex = this.currentIndex;
    const newIndex = currentIndex === this.items.length - 1 ? 0 : currentIndex + 1;
    this.activeItem = this.items[newIndex];
    this.currentIndex = newIndex;
  }

  public home() {
    this.activeItem = this.items[this.homeIndex];
    this.currentIndex = this.homeIndex;
    console.log("home clicked ");
  }

}
