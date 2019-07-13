import { Component, OnInit } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  constructor(private modalCtrl : ModalController,private navParams: NavParams) {
     // componentProps can also be accessed at construction time using NavParams
     console.log(navParams.get('datos'));
   }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
