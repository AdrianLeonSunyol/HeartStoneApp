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
      title: 'Card Decks',
      url: '/tabs/cards',
      icon: 'home'
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
