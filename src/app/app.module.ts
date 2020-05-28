import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowquoteComponent } from './showquote/showquote.component';

@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    ShowquoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
