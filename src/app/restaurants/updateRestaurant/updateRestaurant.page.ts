import { RestApiService } from './../../rest-api.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { Restaurant } from 'src/app/models/restaurant';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateRestaurant',
  templateUrl: 'updateRestaurant.page.html',
  styleUrls: ['updateRestaurant.page.scss']
})
export class UpdateRestaurantPage implements OnInit {

  @Input() restaurant: Restaurant;
  router: any;

  constructor(navParams: NavParams, public modalController: ModalController,
              public restApiService: RestApiService, public alertController: AlertController) { }

  ngOnInit() {  }

  async updateRestaurant(form: NgForm) {
    if (this.presentAlertConfirm()) {
      await this.restApiService.updateRestaurant(this.restaurant.id, form)
        .subscribe(res => {
            const id = res['restaurant.id'];
            this.router.navigate([ '/tabs', { outlets: { details: id }} ]);
          }, (err) => {
            console.log(err);
          }
        );
    } else {
      this.router.navigate([ '/' ]);
    }
   }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: 'Confimar as alterações?',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            return true;
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            return false;
          }
        }
      ]
    });

    await alert.present();
  }
}
