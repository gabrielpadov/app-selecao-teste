import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRestaurantPage } from './viewRestaurant.page';

const routes: Routes = [
  { path: '', component: ViewRestaurantPage },
  { path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ViewRestaurantPageRoutingModule {}
