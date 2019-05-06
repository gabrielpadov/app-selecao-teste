import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addRestaurant',
  templateUrl: 'addRestaurant.page.html',
  styleUrls: ['addRestaurant.page.scss']
})
export class AddRestaurantPage implements OnInit {

  id: string;

  constructor(public toastController: ToastController) { }

  ngOnInit() { }

  addRestaurant(form) {

    console.log(form);
     // this.authService.login(form.value).subscribe((res)=>{
      // this.router.navigateByUrl('/restaurant');
    this.id = form.value.name.toString();
    console.log(this.id);
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
