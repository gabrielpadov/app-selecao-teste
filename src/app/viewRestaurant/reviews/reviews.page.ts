import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Review } from '../../models/review';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  @Input() restaurantId: any;
  reviews: Review[];
  constructor(navParams: NavParams, public modalController: ModalController) {  }
  ngOnInit() {  }


  async closeModal() {
    await this.modalController.dismiss();
  }
}
