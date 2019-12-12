import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Constants } from '../../app/app.constants';
import { Storage } from '@ionic/storage';
import { BasePage } from '../base/base';
import { MPProvider } from '../../providers/mp/mp';
import { PaymentPage } from '../payment/payment';


declare var Mercadopago: any;

function getErrorText(errorCode){
  if(errorCode == "205") return "Ingresa el número de tu tarjeta.";

  if(errorCode == "208") return "Ingrese mes de expiración.";

  if(errorCode == "209") return "Ingrese año de expiración.";

  if(errorCode == "212") return "Ingresa tu documento.";

  if(errorCode == "213") return "Ingresa tu documento.";

  if(errorCode == "214") return "Ingresa tu documento.";

  if(errorCode == "220") return "Ingresa tu banco emisor.";

  if(errorCode == "221") return "Ingresa el nombre y apellido.";

  if(errorCode == "224") return "Ingresa el código de seguridad.";

  if(errorCode == "E301") return "Hay algo mal en ese número. Vuelve a ingresarlo.";

  if(errorCode == "E302") return "Revisa el código de seguridad.";

  if(errorCode == "316") return "Ingresa un nombre válido.";

  if(errorCode == "322") return "Revisa tu documento.";

  if(errorCode == "323") return "Revisa tu documento.";

  if(errorCode == "324") return "Revisa tu documento.";

  if(errorCode == "325") return "Revisa el mes de expiración.";

  if(errorCode == "326") return "Revisa el año de expiración.";

  return "Revisa los datos.";
}

function getBin() {
    var ccNumber:any = document.querySelector('input[data-checkout="cardNumber"]');
    return ccNumber.value.replace(/[ .-]/g, '').slice(0, 6);
};

var bin:any;

function guessingPaymentMethod() {
    bin = getBin();
    if (bin.length >= 6) {
        Mercadopago.getPaymentMethod({
            "bin": bin
        }, setPaymentMethodInfo);
    }
};


function guessingPaymentMethodOri(event) {
    bin = getBin();
    if (event.type == "keyup") {
        if (bin.length >= 6) {
            Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethodInfo);
        }
    } else {
        setTimeout(function() {
            if (bin.length >= 6) {
                Mercadopago.getPaymentMethod({
                    "bin": bin
                }, setPaymentMethodInfo);
            }
        }, 100);
    }
};

var identificationTypes:any = {};
function identificationTypesHandler(data,response){
  console.log(response);
  identificationTypes = response;
}

// cuotas
var installments;
function installmentsHandler(status, response){
  installments = response;
  console.log(installments);
  alert(JSON.stringify(installments));
}

//emisores de tarjeta
var issuers = {};
function issuersHandler(status, response){
  issuers = response;
  console.log(issuers);
  alert(JSON.stringify(issuers));
}

var paymentMethodInfo:any = {};
function setPaymentMethodInfo(status, response) {
  console.log("setPaymentMethodInfo");
  console.log(status);
  console.log(response);
  paymentMethodInfo = response;

    if (status == 200) {
        // do somethings ex: show logo of the payment method
        var form = document.querySelector('#pay');
        if (document.querySelector("input[name=paymentMethodId]") == null) {
            var paymentMethod:any = document.createElement('input');
            paymentMethod.setAttribute('name', "paymentMethodId");
            paymentMethod.setAttribute('type', "hidden");
            paymentMethod.setAttribute('value', response[0].id);
            form.appendChild(paymentMethod);
        } else {
          var pmi:any = document.querySelector("input[name=paymentMethodId]");
          pmi.value = response[0].id;
        }
        // doPay();
    }
};
var token:any = {};
function doPay(){
    var $form = document.querySelector('#pay');
    Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below
};
function sdkResponseHandler(status, response) {
    console.log(response);
    // alert(JSON.stringify(response));
    if (status != 200 && status != 201) {
        alert("verify filled data");
    }else{
        var form:any = document.querySelector('#pay');
        var card:any = document.createElement('input');
        card.setAttribute('name',"token");
        card.setAttribute('type',"hidden");
        card.setAttribute('value',response.id);
        form.appendChild(card);
        // doSubmit=true;
        // form.submit();
        token = response;
        makePayment();
    }
};

// function createToken(){
//     var $form = document.querySelector('#pay');
//     Mercadopago.createToken($form, createTokenHandler); // The function "sdkResponseHandler" is defined below
// };
function createTokenHandler(status, response) {
    console.log("createTokenHandler------");
    console.log(response);
    // alert(JSON.stringify(response));
    if (status != 200 && status != 201) {
        //alert("verify filled data");
        console.log(response);
        // alert(getErrorText(response.cause[0].code));
        localStorage.setItem('STATUS', "NOK");
        localStorage.setItem('ERROR', getErrorText(response.cause[0].code));
    }else{
        var form:any = document.querySelector('#pay');
        var card:any = document.createElement('input');
        card.setAttribute('name',"token");
        card.setAttribute('type',"hidden");
        card.setAttribute('value',response.id);
        form.appendChild(card);
        // doSubmit=true;
        // form.submit();
        token = response;
        addCard();
    }
};


function makePayment(){
  var xhr = new XMLHttpRequest();
 // var url = "https://vps-1060583-x.dattaweb.com:4088/api/mp/pay";
  var url = "http://192.168.10.11:3088/api/mp/pay";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json);
          alert(xhr.responseText);

      }
  };
  var js = {
    paymentToken:token,
    paymentTransaction:{
      amount:123,
      description:"desc",
      installments:3,
      methodId:"visa",
      payerEmail:"jmoreno1976@gmail.com"}
    }
    console.log(js);
  var data = JSON.stringify(js);
  xhr.send(data);
}

var customerId = "";
var addCardUrl = "";

function addCard(){
  // let customerId = "491788413-GMquQJQanoJuVV";
  var xhr = new XMLHttpRequest();
 // var url = "https://vps-1060583-x.dattaweb.com:4088/api/mp/pay";
  // var url = "http://192.168.10.11:3088/api/mp/customers/" + customerId + "/cards";
  xhr.open("POST", addCardUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          console.log(json);
          //alert(xhr.responseText);
          localStorage.setItem('STATUS', "OK");

      }
  };
  var js = {
    token:token.id
  }
  console.log(js);
  var data = JSON.stringify(js);
  xhr.send(data);
  // localStorage.setItem('CARD', data);
}

// creditCardKeypress(kc){
//   console.log(kc);
//   guessingPaymentMethod();
// }


@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
  providers: [MPProvider]
})
export class CardPage extends BasePage {

  user: any = "";
  docTypes = [{id:"DNI",name:"DNI"},{id:"LE",name:"LE"}]

  constructor(
    public storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public mpProvider: MPProvider,
  ) {
    super(toastCtrl, loadingCtrl, navCtrl);
  }

  ionViewDidEnter(){

    this.storage.get(Constants.storage.user).then((val) => {
      this.user = val;
      console.log("User: " + JSON.stringify(this.user))

    });


    console.log(Constants.mp[Constants.mp.env].publicKey);
    Mercadopago.setPublishableKey(Constants.mp[Constants.mp.env].publicKey);
    Mercadopago.getIdentificationTypes();
    Mercadopago.getIdentificationTypes(identificationTypesHandler);
    console.log("did enter");

  }

  createToken(){
    console.log("createToken--------");
    var $form = document.querySelector('#pay');
    customerId = this.user.mpCustomerId;
    addCardUrl = Constants.API_BASE_URL + Constants.API_METHOD_MP + "/customers/" + customerId + "/cards";

    localStorage.removeItem('STATUS');

    Mercadopago.createToken($form, createTokenHandler); // The function "sdkResponseHandler" is defined below

    this.checkStatus();

  }

  checkStatus(){
    setTimeout(() => {

      let status = localStorage.getItem("STATUS");
      if(!status) {
        this.checkStatus();
      } else {
        if(status == "OK"){
          this.showSuccess("Tarjeta agregada correctamente");
          this.navCtrl.pop();
          // let card = JSON.parse(localStorage.getItem("CARD"));
          // this.navCtrl.pop({animate: false});
          // this.navCtrl.push(PaymentPage, {card}, {animate: true});

        } else {
          this.showError(localStorage.getItem("ERROR"));
        }
      }

    }, 2000);
  }

}
