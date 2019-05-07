import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { Restaurant } from '../models/restaurant';
import { UpdateRestaurantPage } from './updateRestaurant/updateRestaurant.page';

@Component({
  selector: 'app-restaurants',
  templateUrl: 'restaurants.page.html',
  styleUrls: ['restaurants.page.scss']
})
export class RestaurantsPage implements OnInit {

  restaurants: any;

  constructor(public alertDelete: AlertController,
              public modalView: ModalController,
              public restApiService: RestApiService) {  }

  ngOnInit() {
    this.restaurants = this.getRestaurants();
    // console.log(this.restaurants);
  }

  getRestaurants() {
    this.restApiService.getRestaurants().subscribe((data: {}) => {
      // console.log(data);
      this.restaurants = data;
    });
  }

  deleteRestaurant(id) {
    // console.log('delete');
    this.restApiService.deleteRestaurant(id)
        .subscribe(res => {
            this.getRestaurants();
          }, (err) => {
            console.log(err);
          }
        );
  }

  async alertConfirmDelete(id) {
    const alert = await this.alertDelete.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteRestaurant(id);
          }
        }
      ]
    });

    await alert.present();
  }

  async updateRestaurant(restaurant: Restaurant) {
    const modal = await this.modalView.create({
      component: UpdateRestaurantPage,
      componentProps: { restaurant }
    });
    return await modal.present();
  }
}
