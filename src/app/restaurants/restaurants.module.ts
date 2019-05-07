import { UpdateRestaurantPage } from './updateRestaurant/updateRestaurant.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantsPageRoutingModule } from './restaurants-routing.module';
import { RestaurantsPage } from './restaurants.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RestaurantsPageRoutingModule,

  ],
  declarations: [RestaurantsPage, UpdateRestaurantPage],
  entryComponents: [UpdateRestaurantPage]
})
export class RestaurantsPageModule {}
