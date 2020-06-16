import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShareComponent } from './share/share.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'more', component: MoreComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'share', component: ShareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
