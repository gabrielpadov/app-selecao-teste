import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  id: string;

  constructor() { }

  ngOnInit() { }

  addRestaurant(form) {

    console.log(form);
     // this.authService.login(form.value).subscribe((res)=>{
      // this.router.navigateByUrl('/restaurant');
    this.id = form.value.name.toString();
    console.log(this.id);
    }

}
