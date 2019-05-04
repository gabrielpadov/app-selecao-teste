import { Tab3Page } from './tab3/tab3.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; import { RestaurantsPageRoutingModule } from './Restaurants-routing.module';
import { RestaurantsPage } from './Restaurants.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RestaurantsPageRoutingModule,

  ],
  declarations: [RestaurantsPage, Tab3Page],
  entryComponents: [Tab3Page]
})
export class RestaurantsPageModule {}
