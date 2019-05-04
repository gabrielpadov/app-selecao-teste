import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsPage } from './reviews/reviews.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  teste = 'ok!';
  myId = null;
   constructor(private activatedRoute: ActivatedRoute,
               public modalView: ModalController) { }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
  }

  async viewReview(idRestaurant) {
    const modal = await this.modalView.create({
      component: ReviewsPage,
      componentProps: { idRestaurant }
    });
    return await modal.present();
  }
}
