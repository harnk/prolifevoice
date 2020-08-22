import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { QuoteService } from '../quote.service';
import { IQuote } from '../quote';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  public id = "";
  public activeItem: IQuote;
  public moreItems = [];

  searchForm: FormGroup;
  constructor(private _quoteService: QuoteService, 
              private _Activatedroute:ActivatedRoute,
              private _router:Router) { 
  }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });

    console.log("passed in id = " + this.id);

    this._quoteService.getQuotes().subscribe((qotd) => {
      var x = this.id;
      var y: number = +x;
      this.activeItem = qotd[y - 1];
      this.moreItems = this.activeItem.metadata.split(",");
    });

    this.searchForm = new FormGroup({
      searchText: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.searchForm);
    console.log(this.searchForm.controls.searchText.value);
    console.log(this.searchForm.get('searchText').value);
    this._router.navigate(['/search-results',this.searchForm.get('searchText').value]);
  }

}
