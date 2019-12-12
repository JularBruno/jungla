import { Component } from '@angular/core';
import { NavController, App, ToastController, LoadingController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CardsPage } from '../cards/cards';
import { Storage } from '@ionic/storage';
import { MPProvider } from '../../providers/mp/mp';
import { Constants } from '../../app/app.constants';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BasePage } from '../base/base';
import { SubscriptionProvider } from '../../providers/subscription/subscription';
import { UserProvider } from '../../providers/user/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvidersSettingsProvider } from '../../providers/providers-settings/providers-settings';
import { HomePage } from '../home/home';

@Component({
  selector: 'profile-contact',
  templateUrl: 'profile.html',
  providers: [MPProvider,SubscriptionProvider,UserProvider,ProvidersSettingsProvider]
})
export class ProfilePage extends BasePage {

  user: any; //"5cd1c99480fb4e2594db4b68"
  subscriptionEnabled = false;
  form: FormGroup;

  price: any;

  constructor(
    private iab: InAppBrowser,
    public app: App,
    public storage: Storage,
    public navCtrl: NavController,
    public mpProvider: MPProvider,
    public userProvider: UserProvider,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public subscriptionProvider: SubscriptionProvider,
    public providersSettingsProvider: ProvidersSettingsProvider
  ) {
    super(toastCtrl, loadingCtrl, navCtrl);
    this.form = this.createForm();

  }

  ionViewDidEnter(){
    this.storage.get(Constants.storage.user).then((val) => {
      this.user = val;
      if (this.user) {
        this.checkSuscription();
        this.setFormValues();
      }
    });

    this.gettingPrice();
  }

  gettingPrice(){
    console.log("gettingPrice")
    this.providersSettingsProvider.getAll()
    .then( sets =>{
      console.log("sets: ", sets)
      this.price= sets[0].subscription
    }).catch(error => console.log(error))
  }

  checkSuscription(){
    this.subscriptionProvider.getByUser(this.user.id)
    .then((subscription:any) => {
      if(subscription) this.user.subscription = subscription;
      return this.storage.set(Constants.storage.user, this.user);
    })
    .then(() => {
      if(this.user.subscription){
        const sd = new Date(this.user.subscription.timestampUpdate);
        sd.setMonth(sd.getMonth()+1);
        const d = new Date();
        this.subscriptionEnabled = d.getTime() <= sd.getTime() ;
      }
    })
    .then(() => {
      //this.onLoad()
    })
  }
  createForm() {
    return this.formBuilder.group({
      user: ['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['01-01-1980'],
      nationality: [''],
      //inscription: [''],
      dni: [''],
      address: [''],
      locality: [''],
      mpCustomerId: [''],
      tel: ['']
    });
  }
  setFormValues() {
    console.log(this.user);
    this.form.controls['firstName'].setValue(this.user.firstName);
    this.form.controls['lastName'].setValue(this.user.lastName);
    this.form.controls['user'].setValue(this.user.user);
    this.form.controls['birthDate'].setValue(this.user.birthDate);
    this.form.controls['nationality'].setValue(this.user.nationality);
    //this.form.controls['inscription'].setValue(this.user.inscription);
    this.form.controls['dni'].setValue(this.user.dni);
    this.form.controls['address'].setValue(this.user.address);
    this.form.controls['locality'].setValue(this.user.locality);
    this.form.controls['mpCustomerId'].setValue(this.user.mpCustomerId);
    this.form.controls['tel'].setValue(this.user.tel);
  }

  logout() {
    this.storage.clear()
      .then(() => {
        this.app.getRootNav().setRoot(LoginPage);
      })
  }

  loadCustomerCards(){
    const paymentItem = {
      code:"SUBSCRIPTION",
      description:"Suscripcion Mensual"
    };
    this.navCtrl.push(CardsPage,{paymentItem});
  }

  paySubscription(){
    if(this.user.mpCustomerId && this.user.mpCustomerId !='')
      this.loadCustomerCards();
    else
      this.createCustomer();

    // if(this.user.mpCustomerId !='')
    //   this.loadCustomerCards();
    // else
    //   this.createCustomer();
  }
    // this.showLoading("Su información se pago se está actualizando");
    // var self = this;
    // this.mpProvider.getSubscriptionInitPoint(this.user)
    //   .then((res:any) => {
    //     console.log(res.initPoint);
    //     const browser = this.iab.create(res.initPoint);
    //     browser.on('exit').subscribe(event => {
    //       setTimeout(() => {
    //         self.showSuccess("Su suscripción ha sido habilitada");
    //         self.navCtrl.pop();
    //       }, 3000);
    //     });
    //   })
    //   .catch(error => {
    //     alert("No se puede obtener el link de pago");
    //   })
    //   .then(() => {
    //     this.hideLoading();
    //   });

  createCustomer(){

    this.showLoading();

    this.mpProvider.createCustomer(this.user)
      .then((res:any) => {
        console.log(res);
        this.form.controls['mpCustomerId'].setValue(res.id);

        let user = this.form.value;
        user.id = this.user.id;
        this.userProvider.update(user)
          .then((res: any) => {
            console.log(res);
            this.storage.set(Constants.storage.user, user);
            this.showSuccess("Se actualizó con éxito");
            this.loadCustomerCards();
          })
          .catch(error => {
            this.showError("No se ha podido actualizar");
          })
          .then(() => {
            this.hideLoading();
          });

      })
      .catch(error => {
        this.hideLoading();
        alert(error);
      });

  }
  update() {
    let user = this.form.value;
    user.id = this.user.id;
    var self = this;
    this.userProvider.update(user)
      .then((res: any) => {
        console.log(res);
        this.storage.set(Constants.storage.user, user);
        this.showSuccess("Se actualizó con éxito");
      })
      .catch(error => {
        this.showError("No se ha podido actualizar");
      })
      .then(() => {
        this.hideLoading();
      });
  }

  goHome() {
    this.navCtrl.setRoot(HomePage)
  }

}
