import { UpdateRestaurantPage } from './updateRestaurant/updateRestaurant.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantsPageRoutingModule } from './restaurants-routing.module';
import { RestaurantsPage } from './restaurants.page';
import { UpdateRestaurantPageModule } from './updateRestaurant/updateRestaurant.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RestaurantsPageRoutingModule,
    UpdateRestaurantPageModule
  ],
  declarations: [RestaurantsPage],
  entryComponents: []
})
export class RestaurantsPageModule {}
