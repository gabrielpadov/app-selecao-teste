import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantPage } from './addRestaurant.page';

const routes: Routes = [
    { path: '', component: AddRestaurantPage }
   ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AddRestaurantPageRoutingModule {}
