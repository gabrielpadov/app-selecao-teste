import { RestApiService } from './../../rest-api.service';
import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, AlertController, ToastController } from '@ionic/angular';
import { Restaurant } from 'src/app/models/restaurant';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateRestaurant',
  templateUrl: 'updateRestaurant.page.html',
  styleUrls: ['updateRestaurant.page.scss']
})
export class UpdateRestaurantPage implements OnInit {

  @Input() restaurant: any;


  constructor(public modalController: ModalController,
              public restApiService: RestApiService,
              public alertController: AlertController,
              public toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
    console.log(this.restaurant._id);
   }

  updateRestaurant(form: NgForm) {
      this.restApiService.updateRestaurant(this.restaurant._id, form.value)
        .subscribe((result) => {
          this.presentToast('Success');
          this.closeModal();
          }, (err) => {
            console.log(err);
            this.closeModal();
            this.router.navigate(['/']).then(nav => {
              window.location.reload();
            });
            this.presentToast('Cancel');
          }
        );
   }

  async closeModal() {
    await this.modalController.dismiss();

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
