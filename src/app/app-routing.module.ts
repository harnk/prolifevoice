import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShareComponent } from './share/share.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'more', component: MoreComponent },
  { path: 'more/:id', component: MoreComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'share', component: ShareComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
