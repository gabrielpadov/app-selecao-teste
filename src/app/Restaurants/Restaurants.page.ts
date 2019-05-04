import { Tab3Page } from './tab3/tab3.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-Restaurants',
  templateUrl: 'Restaurants.page.html',
  styleUrls: ['Restaurants.page.scss']
})
export class RestaurantsPage implements OnInit {

  restaurants: any;

  constructor(public alertDelete: AlertController,
              public modalView: ModalController,
              public restApiService: RestApiService) {  }

  ngOnInit() {
    this.restaurants = this.restApiService.listRestaurants();
  }

  addItem(item) {
    console.log('addItem');
  }

  viewItem(item) {
    console.log('update');
  }

  deleteItem(item) {
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

  async updateItem(restaurant) {
    const modal = await this.modalView.create({
      component: Tab3Page,
      componentProps: { restaurant }
    });
    return await modal.present();
  }
}
