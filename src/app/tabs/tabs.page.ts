import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  readonly pages = [
    {
      title: 'Card Decks',
      url: '/tabs/cards',
      icon: 'home'
    },
    {
      title: 'Tab 2',
      url: '/tabs/tab2',
      icon: 'flash'
    },
    {
      title: 'Tab 3',
      url: '/tabs/tab3',
      icon: 'apps'
    },
    {
      title: 'About',
      url: '/tabs/about',
      icon: 'information'
    }
  ];

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
