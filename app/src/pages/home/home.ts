import { Component } from '@angular/core';
import { NavController, AlertController, App, Tabs, ToastController, LoadingController, PopoverController } from 'ionic-angular';
import { ArticlePage } from '../article/article';
import { ArticleProvider } from '../../providers/article/article';
import { Constants } from '../../app/app.constants';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { SubscriptionProvider } from '../../providers/subscription/subscription';
import { MPProvider } from '../../providers/mp/mp';
import { BasePage } from '../base/base';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FilterPopoverComponent } from '../../components/filter-popover/filter-popover';
// import { PushProvider } from '../../providers/push/push';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MPProvider, ArticleProvider, SubscriptionProvider]
})
export class HomePage extends BasePage {
  tabs: Tabs;
  
  articles: any = [{
    "images": ["assets/jungla/bandas/1.png","assets/jungla/bandas/2.png","assets/jungla/bandas/3.png"],
    "locked": true,
    "likes": 0,
    "price": 30,
    "like": [],
    "title": "Bandas",
    "content": "",
    "category": "2",
    "access": "PAYMENT",
    "video": null,
    "image": "assets/jungla/portadas/1.png",
    "id": "5d94b4301cc23377ed4af51d"
  },
  {
    "images": ["assets/jungla/lugar/1.png","assets/jungla/lugar/2.png","assets/jungla/lugar/3.png","assets/jungla/lugar/4.png","assets/jungla/lugar/5.png","assets/jungla/lugar/6.png","assets/jungla/lugar/7.png"],
    "locked": true,
    "likes": 0,
    "price": 30,
    "like": [],
    "title": "Lugar",
    "content": "",
    "category": "2",
    "access": "PAYMENT",
    "video": null,
    "image": "assets/jungla/portadas/2.png",
    "id": "5d94b4301cc23377ed4af51d"
  },
  {
    "images": ["assets/jungla/entradas/1.png","assets/jungla/entradas/2.png"],
    "locked": true,
    "likes": 0,
    "price": 30,
    "like": [],
    "title": "Entradas",
    "content": "",
    "category": "2",
    "access": "PAYMENT",
    "video": null,
    "image": "assets/jungla/portadas/1b.png",
    "id": "5d94b4301cc23377ed4af51d"
  },
  {
    "images": ["assets/jungla/ayuda/2.png","assets/jungla/ayuda/3.png"],
    "locked": true,
    "likes": 0,
    "price": 30,
    "like": [],
    "title": "Ayuda",
    "content": "",
    "category": "2",
    "access": "PAYMENT",
    "video": null,
    "image": "assets/jungla/portadas/4.png",
    "id": "5d94b4301cc23377ed4af51d"
  }
];

  category = Constants.CATEGORY;
  user: any = "-1"; //"5cd1c99480fb4e2594db4b68"
  // user: any = "5cd4ade7ccec8405a6ec30de" //API Seba
  showToolbar: boolean = false;
  filterSelected: string;

  searchTerm: string;

  constructor(
    private iab: InAppBrowser,
    public storage: Storage,
    public navCtrl: NavController,
    public mpProvider: MPProvider,
    private articleProvider: ArticleProvider,
    private subscriptionProvider: SubscriptionProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public popoverCtrl: PopoverController,
    // public pushProvider: PushProvider,
    private device: Device,
  ) {
    super(toastCtrl, loadingCtrl, navCtrl);
    this.tabs = navCtrl.parent;
  }

  // ionViewDidEnter(){
  //   this.storage.get(Constants.storage.user).then((val) => {
  //     this.user = val;
  //     this.loadArticles();
  //   });
  // }
  //
  ionViewDidEnter() {
    this.intializePage();
  }

  intializePage() {
    console.log("this.filterSelected ", this.filterSelected)
    console.log("Initialize Page");
    this.storage.get(Constants.storage.user).then((val) => {
      this.user = val;
      console.log("user val: ", this.user);
      if (this.user && (this.user != "-1")) {
        console.log("1 - " + this.user)
        let userPN = {
          userApp: this.user.id
        };
        // this.pushProvider.enablePN(userPN);
        return this.subscriptionProvider.getByUser(this.user.id);
      } else {
        console.log("2 - " + this.user)
        if (this.device.uuid) {
          let deviceNumber = {
            userApp: this.device.uuid
          };
          // this.pushProvider.enablePN(deviceNumber);
        }

        return Promise.resolve();
      }
    })
      .then((subscription: any) => {
        console.log("suscription: ", subscription);
        if (subscription) this.user.subscription = subscription;
        return this.storage.set(Constants.storage.user, this.user);
      })
      .then(() => {
        // this.loadArticles();
      })
  }

  loadArticles() {
    this.showLoading("Cargando");
    let userId = "-1";
    let filters: any = {};

    if (this.user) userId = this.user.id;

    if (this.filterSelected) filters.category = this.filterSelected;

    if (this.searchTerm) filters.title = this.searchTerm;

    this.articleProvider.getByUser(userId, filters)
      .then(items => {
        console.log('items ', items)
        this.articles = items;
      })
        .then(items => {
        this.hideLoading();
      });
  }

  toogleToolbar() {
    if (this.showToolbar == true) {
      this.showToolbar = false
    } else {
      this.showToolbar = true
    }
  }

  getBackground(item) {
    let bg;
    // bg = 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%), url(' + Constants.FILES_BASE_URL + "/" + item.image + ')';
    // bg = 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%), url('  + item.image +  ')';
    bg = 'url('  + item.image +  ')';
    return bg;
  }

  showArticle(article) {
    console.log("article", article)

    if (article.locked) {
      console.log("article.locked", article.locked)

      if (article.access == "SUBSCRIPTION") {
        this.showConfirmLocked(article);

      // } else if (article.access == "PAYMENT") {
        //   this.showPayment(article);
        // }
        } else {
        console.log("else")
        this.navCtrl.push(ArticlePage, { article, access:"PAYMENT" });
      }
    } else {
      this.navCtrl.push(ArticlePage, { article, access: "PUBLIC" });
    }
  }

  showConfirmLocked(article) {
    const confirm = this.alertCtrl.create({
      title: 'Recordatorio',
      message: 'Material disponible para usuarios con suscripción. Desea suscribirse?',
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
            this.goToSubscription();
          }
        }
      ]
    });
    confirm.present();
  }
  showPayment(article) {
    const confirm = this.alertCtrl.create({
      title: 'Contenido de Pago',
      message: 'Este contenido tiene costo. Desea comprarlo?',
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
            this.confirmPayment(article);
          }
        }
      ]
    });
    confirm.present();
  }
  confirmPayment(article) {
    let alert = this.alertCtrl.create({
      title: 'Importante',
      subTitle: 'Si realiza el pago con tarjeta de crédito su pago será procesado en unos instantes. Si elige otras formas de pago el contenido estará disponible cuando su pago se haga efectivo',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
        text: 'Entendido',
        handler: () => {
          console.log('Agree clicked');
          this.payArticle(article);
        }
      }]
    });
    alert.present();
  }
  goToSubscription() {
    if (this.user && (this.user != "-1")) {
      this.tabs.select(2);
    } else {
      console.log("Back to Login");
      this.app.getRootNav().setRoot(LoginPage);
    }
  }

  payArticle(article) {
    if (this.user && (this.user != "-1")) {
      this.showLoading("Actualizando");

      let self = this;

      this.mpProvider.getArticleInitPoint(this.user, article)
        .then((res: any) => {
          console.log(res.initPoint);
          const browser = this.iab.create(res.initPoint);
          browser.on('exit').subscribe(event => {
            setTimeout(() => {
              this.hideLoading();
              self.intializePage();
            }, 3000);
          });
        })
        .catch(error => {
          this.hideLoading();
          alert("No se puede obtener el link de pago");
        })
    } else {
      this.app.getRootNav().setRoot(LoginPage);
    }
  }

  // --------------
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(FilterPopoverComponent, { filterSelected: this.filterSelected }, {});
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss((data => {
      if (data) {
        this.filterSelected = data;
      } else {
        this.filterSelected = undefined;
      }
      // this.loadArticles();
    }))
  }

  //Search

  search(event) {
    console.log('value ', event.target.value);
    this.searchTerm = event.target.value;
    // this.loadArticles();
  }

  onCancel() {
    this.searchTerm = undefined;
    // this.loadArticles();
  }

}