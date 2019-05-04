import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @Input() restaurant: any;

  constructor(navParams: NavParams, public modalController: ModalController) {
  }
  ngOnInit() {  }

  updateRestaurant(form) {
    console.log(form.value);
    console.log(this.restaurant.id);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
