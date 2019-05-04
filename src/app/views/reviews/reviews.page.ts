import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  constructor(navParams: NavParams, public modalController: ModalController) {
  }
  ngOnInit() {  }


  async closeModal() {
    await this.modalController.dismiss();
  }
}
