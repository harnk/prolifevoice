import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowquoteComponent } from './showquote/showquote.component';
import { QuoteService } from './quote.service';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    ShowquoteComponent,
    HomeComponent,
    MoreComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule,
    ReactiveFormsModule
    ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      // Use a custom replacer to display function names in the route configs
      // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
  
      // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
  
}
