import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Constants } from '../../app/app.constants';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';
import { MPProvider } from '../../providers/mp/mp';
import { CardPage } from '../card/card';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
  providers: [MPProvider]
})
export class CardsPage extends BasePage {
  cards: any = [
  ];

  user: any = "";
  showSpinner = true;
  paymentItem = {};

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public mpProvider: MPProvider,
  ) {
    super(toastCtrl, loadingCtrl, navCtrl);
    this.paymentItem = navParams.get('paymentItem');
  }

  ionViewDidEnter(){

    this.showSpinner = true;

    this.storage.get(Constants.storage.user).then((val) => {
      this.user = val;
      console.log("User: " + JSON.stringify(this.user))

      this.loadCards();
    });

  }

  loadCards() {
    let userId = "-1";


    if(this.user){
      // this.showLoading("");
      this.mpProvider.getCustomerCards(this.user)
        .then(items => {
          console.log(items);
          this.cards = items;
        })
        .catch(error => {
          this.showError("No pueden traer las tarjetas asociadas");
        })
        .then(() => {
          // this.hideLoading();
          this.showSpinner = false;
        });
    }
  }

  addCard(){
    this.navCtrl.push(CardPage);
    // this.navCtrl.pop({animate: false});
    // this.navCtrl.push(CardPage, null, {animate: true});
  }

  selectCard(card){
    // this.navCtrl.push(PaymentPage,{card})
    this.navCtrl.pop({animate: false});
    this.navCtrl.push(PaymentPage, {card:card,paymentItem:this.paymentItem}, {animate: true});
  }

}
