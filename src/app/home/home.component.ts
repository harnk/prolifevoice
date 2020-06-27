import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public today = Date.now();

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("HomeComponent init");

    // console.log(params.get('id'));
  }

}
