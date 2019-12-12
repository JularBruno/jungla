import { Component } from '@angular/core';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { Events,NavController, AlertController, App, Tab, Tabs, } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Constants } from '../../app/app.constants';
import { LoginPage } from '../login/login';
// import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('Tabs') Tabs: Tabs;

  tabHome = HomePage;
  tabNotifications = NotificationsPage;
  tabProfile = ProfilePage;
  // needCheckLogin = true;
  user;

  constructor(
    // private iab: InAppBrowser,
    public storage: Storage,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public app: App,
  ) {
    this.storage.get(Constants.storage.user).then((user) => {
      this.user = user;
    });

  }

  showNotifications(){
    // this.checkLogin("Para visualizar las notificaciones debe ingresar o registrarse!");
    // this.checkLogin("Advertencia. Esta acción es solo para usuarios registrados. Desas registrarte? Es sin cargo.");
    //const browser = this.iab.create('https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=423762400-a5672344-8909-4e68-923a-ddfbf98acfd5');
    // const browser = this.iab.create('https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=423762400-afe9c2d0-14cc-4b36-a43d-69a34eae8d91');


  }

  showProfile(){
    console.log("Check Login");
    // this.checkLogin("Para ver su perfil debe ingresar o registrarse!");
    // this.checkLogin("Advertencia. Esta acción es solo para usuarios registrados. Desas registrarte? Es sin cargo.");
  }

  checkLogin(msg){
      if(!this.user){
        this.Tabs.select(0);
        this.showAccess(msg);
      }
  }

  showAccess(msg){
    const confirm = this.alertCtrl.create({
      title: 'Acceso Restringido',
      message: msg,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            this.goToLogin();
          }
        }
      ]
    });
    confirm.present();
  }

  goToLogin() {
    console.log("Back to Login");
    this.app.getRootNav().setRoot(LoginPage);

  }

  // showNotifications(){
  //   if(this.needCheckLogin){
  //     this.Tabs.select(0);
  //     this.checkLogin(1,"Para visualizar las notificaciones debe ingresar o registrarse!");
  //   }
  //   this.needCheckLogin = true;
  // }
  //
  // showProfile(){
  //   if(this.needCheckLogin){
  //     this.Tabs.select(0);
  //     this.checkLogin(2,"Para ver su perfil debe ingresar o registrarse!");
  //   }
  //   this.needCheckLogin = true;
  // }
  //
  // checkLogin(idx,msg){
  //   this.storage.get(Constants.storage.user).then((user) => {
  //     if(user){
  //       this.needCheckLogin = false;
  //       this.Tabs.select(idx);
  //     } else {
  //       this.showAccess(msg);
  //     }
  //   });
  // }
  //
  // showAccess(msg){
  //   const confirm = this.alertCtrl.create({
  //     title: 'Acceso Restringido',
  //     message: msg + ' Desea hacerlo?',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Si',
  //         handler: () => {
  //           console.log('Agree clicked');
  //           this.goToLogin();
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }
  //
  // goToLogin() {
  //   console.log("Back to Login");
  //   this.app.getRootNav().setRoot(LoginPage);
  //
  // }

}
