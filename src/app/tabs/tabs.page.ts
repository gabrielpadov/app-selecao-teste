import { Tab3Page } from './../tab3/tab3.page';
import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public items = [
    {title: 'hi1', description: 'test1'},
    {title: 'hi2', description: 'test2'},
    {title: 'hi3', description: 'test3'}
  ];

  constructor(public alertDelete: AlertController, public modalView: ModalController) {

  }

  addItem(item) {
    console.log('addItem');
  }

  updateItem(item) {
    console.log('update');
  }

  deleteItem(item) {
    console.log('delete');
  }

  async alertConfirmDelete(item) {
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
            this.deleteItem(item);
          }
        }
      ]
    });

    await alert.present();
  }

  async viewItem(item) {
    const modal = await this.modalView.create({
      component: Tab3Page,
      componentProps: { value: 123, item }
    });
    return await modal.present();
  }
}
