import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular';
import { CrearPage } from './crear/crear.page';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  private items = [];

  constructor(private modalController : ModalController) { }

  ngOnInit() {
    let items = [
      {titulo:'500 litros de Aceite' , subtitulo : 'Subtitulo de la cosa esta ', descripcion :'Descripcion del tema este para que aparezca'},
      {titulo:'256 litros de Aceite' , subtitulo : 'Subtitulo de la cosa esta ', descripcion :'Descripcion del tema este para que aparezca'},
      {titulo:'85 kilos de cemento' , subtitulo : 'Subtitulo de la cosa esta ', descripcion :'Descripcion del tema este para que aparezca'},
      {titulo:'73 litros de Mercurio' , subtitulo : 'Subtitulo de la cosa esta ', descripcion :'Descripcion del tema este para que aparezca'},
      {titulo:'56 metros de madera' , subtitulo : 'Subtitulo de la cosa esta ', descripcion :'Descripcion del tema este para que aparezca'},
    ]
    this.items = items;
  }
  doRefresh(event) {
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CrearPage,
      componentProps: {
        'datos': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }

}
