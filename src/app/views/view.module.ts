import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPage } from './view.page';
import { ViewPageRoutingModule } from './view-routing.module';
import { ReviewsPage } from './reviews/reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule
  ],
  declarations: [ViewPage, ReviewsPage],
  entryComponents: [ReviewsPage]
})
export class ViewPageModule {}
