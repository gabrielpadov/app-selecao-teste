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
  

   constructor(private activatedRoute: ActivatedRoute,
               public modalView: ModalController,
               public restApiService: RestApiService) {   }

	ngOnInit() { 
		 this.id = this.activatedRoute.snapshot.paramMap.get('id');
		 this.restApiService.getRestaurant(this.id).subscribe((data: {}) => {
			this.restaurant = data;
			this.restApiService.getMenuRestaurant(this.restaurant.id).subscribe((data: {}) => {
				this.menus = data;
			});
			this.restApiService.getReviewRestaurant(this.restaurant.id).subscribe((data: {}) => {
				this.reviews = data;
			});
		 });
	}
 /*
  
   async viewReview(restaurant: Restaurant) {
    // const aux: Review[ ] = this.reviews;
    const modal = await this.modalView.create({
      component: ReviewsPage,
	componentProps: { restaurant }
    });
    return await modal.present();
  } */
}
