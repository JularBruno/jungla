import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Constants } from '../../app/app.constants';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';
import { MPProvider } from '../../providers/mp/mp';
import { ProvidersSettingsProvider } from '../../providers/providers-settings/providers-settings';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
  providers: [MPProvider,ProvidersSettingsProvider]
})
export class PaymentPage extends BasePage {

  user: any = "";
  card: any = {};
  paymentItem: any = {};
  price: any;
  securityCode:number;

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public mpProvider: MPProvider,
    public providersSettingsProvider: ProvidersSettingsProvider
  ) {
    super(toastCtrl, loadingCtrl, navCtrl);
    this.card = navParams.get('card');
    this.paymentItem = navParams.get('paymentItem');
    console.log(this.card);
    console.log(this.paymentItem);
  }

  ionViewDidEnter(){

    this.storage.get(Constants.storage.user).then((val) => {
      this.user = val;
      console.log("User: " + JSON.stringify(this.user))

    });

    this.gettingPrice();

  }

  pay(){
    // alert(this.securityCode);

    this.showLoading();

    this.mpProvider.getCustomerCardToken(this.user,this.card,this.securityCode)
      .then((res:any) => {
        console.log(res);

        this.mpProvider.createPayment(
          this.user,
          res.id,
          this.price,
          this.paymentItem.description,
          this.paymentItem.code,
          this.paymentItem.articleId,
          1,
          this.card.payment_method.id,
          this.paymentItem.externaReference)
          .then( payment => {
            console.log(payment);
            this.showError("Pago registrado con exito");
            this.navCtrl.pop();
          })
          .catch(error => {
              this.showError("No se puede realizar el pago");
          })
          .then(() => {
            this.hideLoading();
          });
      })
      .catch(error => {
          this.showError("No se puede realizar el pago con esta tarjeta");
      })
      .then(() => {
        this.hideLoading();
      });
  }

  gettingPrice(){
    console.log("gettingPrice")
    this.providersSettingsProvider.getAll()
    .then( sets =>{
      console.log("sets: ", sets)
      this.price= sets[0].subscription
    }).catch(error => console.log(error))
  }


}
