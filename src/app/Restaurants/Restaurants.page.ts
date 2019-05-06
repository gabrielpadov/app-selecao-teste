import { UpdateRestaurantPage } from './updateRestaurant/updateRestaurant.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { Restaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: 'restaurants.page.html',
  styleUrls: ['restaurants.page.scss']
})
export class RestaurantsPage implements OnInit {

  restaurants: Restaurant[];

  constructor(public alertDelete: AlertController,
              public modalView: ModalController,
              public restApiService: RestApiService) {  }

  ngOnInit() {
    this.restaurants = this.restApiService.listRestaurants();
  }

  addItem() {
    console.log('addItem');
  }

  viewItem(item) {
    console.log('update');
  }

  deleteItem(id) {
    console.log('delete');
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
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteItem(id);
          }
        }
      ]
    });

    await alert.present();
  }

  async updateItem(restaurant: Restaurant) {
    const modal = await this.modalView.create({
      component: UpdateRestaurantPage,
      componentProps: { restaurant }
    });
    return await modal.present();
  }
}
