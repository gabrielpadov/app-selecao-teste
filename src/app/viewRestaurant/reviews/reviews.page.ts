import { RestApiService } from './../../rest-api.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Review } from '../../models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  @Input() reviews; // staurantId;
  // reviews: any;

  constructor(navParams: NavParams, public modalController: ModalController,
              public restApiService: RestApiService) {  }
  ngOnInit() {
   //  this.reviews = this.getMenuRestaurant();
    console.log(this.reviews + 'aqui');
   }

 /* getMenuRestaurant() {
    this.restApiService.getReviewRestaurant(this.restaurantId.restaurantId).subscribe((data: {}) => {
      console.log(data);
      this.reviews = data;
    });
  } */

  async closeModal() {
    await this.modalController.dismiss();
  }
}
