import { Review } from './../models/review';

import { RestApiService } from './../rest-api.service';
import { Restaurant } from './../models/restaurant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsPage } from './reviews/reviews.page';
import { ModalController } from '@ionic/angular';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-viewRestaurant',
  templateUrl: './viewRestaurant.page.html',
  styleUrls: ['./viewRestaurant.page.scss'],
})
export class ViewRestaurantPage implements OnInit {

  id: any;
  restaurant: any;
  menus: any;
  reviews: any;
  public refId: any;

   constructor(private activatedRoute: ActivatedRoute,
               public modalView: ModalController,
               public restApiService: RestApiService) {

               }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.restaurant = this.getRestaurantShare(this.id);
  }

getRestaurantShare(id) {
  this.restApiService.getRestaurant(id).subscribe((data: {}) => {
    // console.log(data);
    this.restaurant = data;
    this.menus = this.getMenuRestaurantShare();
    this.reviews = this.getReviewRestaurant();
    // console.log(this.refId);
  });
}

getMenuRestaurantShare() {
  // console.log(this.restaurant.id);
  this.restApiService.getMenuRestaurant(this.restaurant.id).subscribe((data: {}) => {
    this.menus = data;
    // console.log(this.menus);
  });
  }

  getReviewRestaurant() {
    this.restApiService.getReviewRestaurant(this.restaurant.id).subscribe((data: {}) => {
      console.log(data);
      this.reviews = data;
    });
  }
  async viewReview() {
    const aux: Review = this.reviews;
    const modal = await this.modalView.create({
      component: ReviewsPage,
      componentProps: {aux}
    });
    return await modal.present();
  }
}
