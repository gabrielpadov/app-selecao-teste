import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', loadChildren: './restaurants/restaurants.module#RestaurantsPageModule' },
  { path: 'addRestaurant', loadChildren: './addRestaurant/addRestaurant.module#AddRestaurantPageModule' },
  // { path: 'view/:myid', loadChildren: './view/view.module#ViewPageModule' }
  { path: 'view/:id', loadChildren: './viewRestaurant/viewRestaurant.module#ViewRestaurantPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
