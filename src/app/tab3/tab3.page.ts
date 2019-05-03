import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @Input() value: number;
  @Input() item: any;

  constructor(navParams: NavParams) {
  }
  ngOnInit() {  }
}
