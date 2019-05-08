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

  @Input() restaurantId;
  reviews: any;

  constructor(navParams: NavParams, public modalController: ModalController,
              public restApiService: RestApiService) {  }
  ngOnInit() {
    this.restApiService.getReviewRestaurant(this.restaurantId).subscribe((data: {}) => {
      this.reviews = data;
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
