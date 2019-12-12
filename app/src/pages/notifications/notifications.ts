import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Constants } from '../../app/app.constants';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';
import { NotificationProvider } from '../../providers/notification/notification';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  providers: [NotificationProvider]
})
export class NotificationsPage extends BasePage {
  notifications: any = [ 
    {
      "title": "Solo quedan 300 entradas!!",
      "message": "Apúrate a sacar las tuyas en la ventana de entradas"
    },
    {
      "title": "Sorteo",
      "message": "Mira nuestro instagram para poder participar"
    }
  ];

  notificationsNew: any = [];

  user: any = "";

  // user: any = "-1"; //"5cd1c99480fb4e2594db4b68"

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public notificationProvider: NotificationProvider,
  ) {
    super(toastCtrl, loadingCtrl, navCtrl);
  }

  ionViewDidEnter(){

    this.storage.get(Constants.storage.user).then((val) => {
      this.user = val;
      console.log("User: " + JSON.stringify(this.user))

      this.loadNotifications();
    });

  }

  loadNotifications() {
    let userId = "-1";

    if(this.user){
      this.notificationProvider.getByUser(this.user.id)
        .then(items => {
          console.log(items);
          this.notifications = items;
        })
    }
  }
}
