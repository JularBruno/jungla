import { Component } from '@angular/core';
import { Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { Device } from '@ionic-native/device';
import { PushProvider } from '../providers/push/push';
import { Constants } from './app.constants';

@Component({
  templateUrl: 'app.html',
  providers: [PushProvider]
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private events: Events,
    private toastCtrl: ToastController,
    private device: Device,
    private pushProvider: PushProvider,
    private storage: Storage
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // let welcome = "true";
      // if (welcome && welcome == "true") {
        this.rootPage = TabsPage
      // } else {
        // ------------  this.rootPage = WelcomePage
      // }
    });

    //Show Foreground Notification
    // this.events.subscribe('foregroundNotification', (notification) => {
    //   console.log(notification.title + " - " + notification.message)
    //   const toast = this.toastCtrl.create({
    //     message: notification.title + ': ' + notification.message,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.onDidDismiss(() => {
    //     console.log('Cancelar Notificación');
    //   });
    //   toast.present();
    // });
  }
}
