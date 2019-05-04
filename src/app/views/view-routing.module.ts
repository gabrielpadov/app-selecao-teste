import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPage } from './view.page';

const routes: Routes = [
  { path: '', component: ViewPage },
  { path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ViewPageRoutingModule {}
