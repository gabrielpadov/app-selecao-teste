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

  id = null;
  menus: Menu[];
  restaurant: Restaurant = {
    id: 'bread-bakery',
    name: 'Bread & Bakery',
    category: 'Bakery',
    deliveryEstimate: '25m',
    rating: 4.9,
    imagePath: 'assets/img/restaurants/breadbakery.png',
    about: 'A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.',
    hours: 'Funciona de segunda à sexta, de 8h às 23h'
  };

   constructor(private activatedRoute: ActivatedRoute,
               public modalView: ModalController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.menus = null;
   // this.restaurant
  }

  async viewReview(idRestaurant) {
    const modal = await this.modalView.create({
      component: ReviewsPage,
      componentProps: { idRestaurant }
    });
    return await modal.present();
  }
}
