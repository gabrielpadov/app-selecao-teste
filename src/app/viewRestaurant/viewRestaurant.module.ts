import { ReviewsPageModule } from './reviews/reviews.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRestaurantPage } from './viewRestaurant.page';
import { ViewRestaurantPageRoutingModule } from './viewRestaurant-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRestaurantPageRoutingModule,
    ReviewsPageModule
  ],
  declarations: [ViewRestaurantPage, ],
  entryComponents: []
})
export class ViewRestaurantPageModule {}
