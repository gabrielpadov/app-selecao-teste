import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddRestaurantPage } from './addRestaurant.page';
import { AddRestaurantPageRoutingModule } from './addRestaurant-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddRestaurantPageRoutingModule
  ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {}
