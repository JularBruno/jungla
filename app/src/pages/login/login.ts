import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user/user';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Constants } from '../../app/app.constants';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';
import { SubscriptionProvider } from '../../providers/subscription/subscription';
import { PushProvider } from '../../providers/push/push';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserProvider, SubscriptionProvider, PushProvider]
})
export class LoginPage extends BasePage {

  form: FormGroup;

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    public subscriptionProvider: SubscriptionProvider,
    public pushProvider: PushProvider,
    private device: Device,
  ) {
      super(toastCtrl, loadingCtrl, navCtrl);
      this.form = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      user: [''],
      password: ['']
    });
  }

  login() {
    this.showLoading("");
    let user:any = this.form.value;

    this.userProvider.login(user)
      .then((u:any) => {
        user  = u.user;
        this.pushProvider.getEnsureByUser(this.device.uuid)
          .then((res: any) => {
            console.log('Get User: ', res);
            if (res.length > 0) {
              console.log('User ID to remove: ', res[0].id);
              this.pushProvider.removeUser(res[0].id)
                .then(res => {
                  console.log('User Removed', res);
                  //this.pushProvider.enablePN(user);
                })
                .catch(e => console.log("Error: ",e));
            } else {
              //this.pushProvider.enablePN(user);
            }
          });

        return this.subscriptionProvider.getByUser(user.id);
      })
      .then((subscription:any) => {
        if(subscription) user.subscription = subscription;
        return this.storage.set(Constants.storage.user, user);
      })
      .then(() => {
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(error => {
        this.showError("No puede ingresar");
      })
      .then(() => {
        this.hideLoading();
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  showHome() {
    this.navCtrl.setRoot(TabsPage)
  }
  showRegister() {
    this.navCtrl.push(RegisterPage)
  }

}
