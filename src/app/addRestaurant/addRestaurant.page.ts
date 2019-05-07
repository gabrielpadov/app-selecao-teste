import { Restaurant } from './../models/restaurant';
import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addRestaurant',
  templateUrl: 'addRestaurant.page.html',
  styleUrls: ['addRestaurant.page.scss']
})
export class AddRestaurantPage implements OnInit {

  restaurant: Restaurant;

  constructor(public toastController: ToastController,
              public restApiService: RestApiService,
              private router: Router) { }

  ngOnInit() { }

  addRestaurant(form) {

    this.restaurant = { id: form.value.name,
      name: form.value.name,
      rating: form.value.rating,
      category: form.value.category,
      deliveryEstimate: form.value.deliveryEstimate,
      hours: form.value.hours,
      about: form.value.about,
      imagePath: form.value.imagePath
    };

    this.restApiService.addRestaurant(this.restaurant).subscribe((result) => {
      this.presentToast();
      this.router.navigate(['/']).then(nav => {
        window.location.reload();
      });
      }, (err) => {
      console.log(err);
     });
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
