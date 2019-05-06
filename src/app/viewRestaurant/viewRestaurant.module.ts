import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRestaurantPage } from './viewRestaurant.page';
import { ViewRestaurantPageRoutingModule } from './viewRestaurant-routing.module';
import { ReviewsPage } from './reviews/reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRestaurantPageRoutingModule
  ],
  declarations: [ViewRestaurantPage, ReviewsPage],
  entryComponents: [ReviewsPage]
})
export class ViewRestaurantPageModule {}
