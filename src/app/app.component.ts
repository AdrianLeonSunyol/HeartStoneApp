import { Component, OnInit } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public toastController: ToastController
  ) {
  }

  ngOnInit() {
    this.initializeApp();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Bienvenida',
      position: "top",
      message: 'Bienvenido a nuestra aplicación! Utiliza el menú de navegación inferior y superior para desplazarte por ella! Disfrútalo',
      duration: 3000
    });
    toast.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.presentToast();
  }
}
