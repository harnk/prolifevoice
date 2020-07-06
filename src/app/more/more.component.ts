import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuoteService } from '../quote.service';
import { IQuote } from '../quote';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  searchForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchText: new FormControl()
    });
  }

  onSubmit(): void {
    console.log(this.searchForm);
    console.log(this.searchForm.controls.searchText.value);
    console.log(this.searchForm.get('searchText').value);
  }

}
