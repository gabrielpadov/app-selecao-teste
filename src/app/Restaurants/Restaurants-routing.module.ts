import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsPage } from './Restaurants.page';

const routes: Routes = [
    { path: '', component: RestaurantsPage }
   ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RestaurantsPageRoutingModule {}
