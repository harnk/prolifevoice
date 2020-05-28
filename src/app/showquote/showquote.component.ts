import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showquote',
  templateUrl: './showquote.component.html',
  styleUrls: ['./showquote.component.css']
})
export class ShowquoteComponent implements OnInit {

  public quotes = [
    {
      "id": 1,
      "quote": "I've noticed that everyone who is for abortion has already been born.",
      "author": "Ronald Reagan",
      "link": "",
      "video": "",
      "meta-data": "ironic, witty, President, pro-abortion",
      "date-posted": "5/5/20",
      "number-of-times-posted": 1
    },
    {
      "id": 2,
      "quote": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln",
      "link": "",
      "video": "",
      "meta-data": "ironic, witty, President, pro-abortion",
      "date-posted": "5/20/20",
      "number-of-times-posted": 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
