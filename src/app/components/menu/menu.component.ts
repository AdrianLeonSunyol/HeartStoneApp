import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  readonly pages = [
    {
      title: 'Práctica 2 Componentes',
      url: '/tabs/componentes',
      icon: 'hammer-outline'
    },
    {
      title: 'Práctica 3 Servicios',
      url: '/tabs/servicios',
      icon: 'briefcase-outline'
    },
    {
      title: 'About',
      url: '/tabs/about',
      icon: 'information'
    }
  ];

  ngOnInit(): void {
  }

  constructor(
    public toastController: ToastController
    ) {}

  async closeApp() {
    const toast = await this.toastController.create({
      message: 'Seguro que quieres cerrar la apliación?',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'arrow-back',
          text: 'cancel',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          icon: 'backspace',
          role: 'cerrar',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    toast.present();
  }
}
