webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.APP_VERSION = '0.0.8';
    // public static API_BASE_URL = 'http://172.20.16.179:3071/api';
    // public static FILES_BASE_URL = 'http://172.20.16.179:3071/files';
    Constants.API_BASE_URL = 'http://localhost:3071/api';
    Constants.FILES_BASE_URL = 'http://localhost:3071/files';
    // public static API_BASE_URL = 'http://vps-1060583-x.dattaweb.com:3071/api';
    // public static FILES_BASE_URL = 'http://vps-1060583-x.dattaweb.com:3071/files';
    // public static API_BASE_URL = 'http://192.168.2.101:3071/api';
    // public static FILES_BASE_URL = 'http://192.168.2.101:3071/files';
    Constants.API_METHOD_FILE_UPLOAD = '/files/upload';
    Constants.DEFAULT_AVATAR_NO_IMAGE = "assets/imgs/avatar.png";
    Constants.DEFAULT_CAR_NO_IMAGE = "assets/imgs/noimage.png";
    Constants.DEFAULT_SPONSOR_IMAGE = "assets/imgs/header.png";
    Constants.API_METHOD_ARTICLES = '/articles';
    Constants.API_METHOD_MP = '/mp';
    Constants.API_METHOD_USERS = '/users';
    Constants.API_METHOD_SUBSCRIPTIONS = '/subscriptions';
    Constants.API_METHOD_NOTIFICATIONS = '/notifications';
    //
    Constants.API_METHOD_SETTINGS = '/settings';
    Constants.CATEGORIES = [
        {
            id: '1',
            name: 'Productos'
        },
        {
            id: '2',
            name: 'Herramientas'
        },
        {
            id: '3',
            name: 'Capacitaciones'
        },
        {
            id: '4',
            name: 'Novedades'
        },
        {
            id: '5',
            name: 'Promociones'
        },
        {
            id: '6',
            name: 'Tutoriales'
        },
        {
            id: '7',
            name: 'Catálogo'
        }
    ];
    Constants.CATEGORY = {
        '1': 'Productos',
        '2': 'Herramientas',
        '3': 'Capacitaciones',
        '4': 'Novedades',
        '5': 'Promociones',
        '6': 'Tutoriales',
        '7': 'Catálogo'
    };
    Constants.storage = {
        user: 'canadez_user',
    };
    Constants.mp = {
        env: "dev",
        prod: {
            publicKey: "APP_USR-5f2b0e7d-2fc8-4326-b81e-9a7bc58876de",
        },
        dev: {
            publicKey: "TEST-a21ebdf6-e09b-4b00-885c-49db6416db1b",
        }
    };
    // PUSH SERVER ENDPOINTS
    Constants.PUSH_APP_ID = '5d48975a93c87426fb9ed49e';
    Constants.PUSH_SERVER_URL = 'http://sd-1060583-h00012.ferozo.net:3050/api';
    Constants.PUSH_SERVER_REGISTER_ID = '/users/ensure';
    Constants.PUSH_GET_MESSAGE = '/message/';
    Constants.PUSH_ICON_COLOR = '#692F7B';
    Constants.PUSH_ICON_NAME = 'ic_stat_notifications';
    return Constants;
}());

//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_subscription_subscription__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterPage = /** @class */ (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(storage, navCtrl, navParams, formBuilder, toastCtrl, loadingCtrl, userProvider, subscriptionProvider) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.formBuilder = formBuilder;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.userProvider = userProvider;
        _this.subscriptionProvider = subscriptionProvider;
        _this.form = _this.createForm();
        return _this;
    }
    RegisterPage.prototype.createForm = function () {
        return this.formBuilder.group({
            user: [''],
            firstName: [''],
            lastName: [''],
            repassword: [''],
            password: ['']
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.showLogin = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.register = function () {
        // if(this.validatePassword())
        this.registerUser();
    };
    RegisterPage.prototype.validatePassword = function () {
        if (this.form.value.password != this.form.value.repassword) {
            this.showError("El password debe coincidir");
            return false;
        }
        if (this.form.value.password.length < 6) {
            this.showError("El password debe tener al menos 6 caracteres");
            return false;
        }
        return true;
    };
    RegisterPage.prototype.registerUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        this.showSuccess("Ya puedes retirar tu entrada con tu DNI");
        // this.showLoading("");
        // let user = this.form.value;
        // this.userProvider.create(user)
        //   .then(u => {
        //     user = u;
        //     this.storage.set(Constants.storage.user, u);
        //   })
        //   // .then(() => {
        //   //   this.subscriptionProvider.create({user:user.id});
        //   // })
        //   .then(() => {
        //     this.showSuccess("Usuario registrado con Exito!");
        //     this.navCtrl.setRoot(TabsPage);
        //   })
        //   .catch(error => {
        //     if(error == "ValidationError")
        //       this.showError("No se puede registrar porque el email ya existe.");
        //     else
        //       this.showError("No se puede registrar");
        //   })
        //   .then(() => {
        //     this.hideLoading();
        //   });
    };
    // registerUser() {
    //   this.showLoading("");
    //   let user = this.form.value;
    //
    //   this.userProvider.create(user)
    //     .then(user => {
    //       this.storage.set(Constants.storage.user, user)
    //         .then(() => {
    //           this.showSuccess("Usuario registrado con Exito!");
    //           this.navCtrl.setRoot(TabsPage);
    //         })
    //         .catch(error => {
    //           this.showError("No se puede registrar");
    //         })
    //         .then(() => {
    //           this.hideLoading();
    //         });
    //     })
    //     .catch(error => {
    //       if(error == "ValidationError")
    //         this.showError("No se puede registrar porque el email ya existe.");
    //       else
    //         this.showError("No se puede registrar");
    //       this.hideLoading();
    //     });
    // }
    RegisterPage.prototype.showHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title text-center>Registrate</ion-title>\n    <ion-buttons end class="back-button-md">\n      <button ion-button icon-only>\n        <ion-icon name="close" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-grid class="title-grid">\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8 text-center>\n        <h2>Registrate aquí</h2>\n        <p>Completá los siguientes campos</p>\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n  </ion-grid>\n  <form class="cool-form" (ngSubmit)="register()" [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Nombre</ion-label>\n      <ion-input type="text" formControlName="firstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Apellido</ion-label>\n      <ion-input type="text" formControlName="lastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" formControlName="user"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>DNI</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Contraseña</ion-label>\n      <ion-input type="password" formControlName="repassword"></ion-input>\n    </ion-item>\n    <ion-list-header margin-top no-lines>\n      Condiciones de inscripción\n    </ion-list-header>\n    <ion-item no-lines text-wrap>\n      <p>Jungla® dispone esta aplicación esperando que el usuario la use correctamente.\n        Al registrarse ya formará parte de nuestro sistema. \n        Muchas gracias por confiar en nuestros servicios!\n      </p>\n    </ion-item>\n    <div class="separator"></div>\n    <div class="button-container">\n      <button ion-button block round color="white" class="default-btn" type="submit">Continuar</button>\n    </div>\n\n    <ion-item text-center no-lines class="transparent" (click)="showHome()">Volver a la Home</ion-item>\n    <div class="separator"></div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/register/register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_subscription_subscription__["a" /* SubscriptionProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_subscription_subscription__["a" /* SubscriptionProvider */]])
    ], RegisterPage);
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BasePage */]));

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_push__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PushProvider = /** @class */ (function () {
    function PushProvider(http, push, platform, events) {
        this.http = http;
        this.push = push;
        this.platform = platform;
        this.events = events;
        console.log('Hello PushProvider Provider');
    }
    /**
     * @param user - id de usuario (object)
     */
    PushProvider.prototype.enablePN = function (user) {
        var _this = this;
        this.user = user;
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
                //alert('We have permission to send push notifications');
                _this.registerPN();
            }
            else {
                console.log('We do not have permission to send push notifications');
                //alert("No tiene permisos para notificaciones");
            }
        })
            .catch(function (response) {
            console.log(response);
            alert(response);
        });
    };
    PushProvider.prototype.registerPN = function () {
        var _this = this;
        var options = {
            android: {
                icon: __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].PUSH_ICON_NAME,
                iconColor: __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].PUSH_ICON_COLOR
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification:' + JSON.stringify(notification));
            _this.events.publish('foregroundNotification', notification);
        });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered:' + JSON.stringify(registration));
            _this.user.pnId = registration.registrationId;
            _this.user.app = __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].PUSH_APP_ID;
            if (_this.platform.is('android')) {
                _this.user.osType = 'android';
            }
            else if (_this.platform.is('ios')) {
                _this.user.osType = 'ios';
            }
            // const user = {
            //   app: "5cb76e58ab5af1207ea405bb",
            //   userApp: "user@dipro",
            //   pnId: registration.registrationId,
            //   osType: "Android"
            // };
            // const url = "http://190.106.134.143:3050/api/users/ensure"; //Micam
            var url = __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].PUSH_SERVER_URL + __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].PUSH_SERVER_REGISTER_ID;
            console.log("Ensure:" + JSON.stringify(_this.user));
            //alert("Ensure:" + JSON.stringify(this.user));
            _this.http.post(url, _this.user)
                .toPromise()
                .then(function (response) {
                console.log("Ensure OK:" + JSON.stringify(response));
                //alert("Ensure OK :" + JSON.stringify(response));
            })
                .catch(function (error) {
                console.log("Error:" + JSON.stringify(error));
                //alert("Error:" + JSON.stringify(error));
            });
        });
        pushObject.on('error').subscribe(function (error) { return alert('Ha ocurrido un error con el servidor de push notification ' + error); });
    };
    PushProvider.prototype.getEnsureByUser = function (userApp) {
        var filters = {
            'userApp': userApp
        };
        var url = __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].PUSH_SERVER_URL + "/users" + "?_filters=" + encodeURI(JSON.stringify(filters));
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (e) { return console.log(e); });
    };
    PushProvider.prototype.removeUser = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].PUSH_SERVER_URL + "/users/" + id;
        return this.http.delete(url)
            .toPromise()
            .then(function (response) { return response; })
            .catch(function (e) { return console.log(e); });
    };
    PushProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */]])
    ], PushProvider);
    return PushProvider;
}());

//# sourceMappingURL=push.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payment_payment__ = __webpack_require__(218);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CardsPage = /** @class */ (function (_super) {
    __extends(CardsPage, _super);
    function CardsPage(storage, navCtrl, navParams, toastCtrl, loadingCtrl, mpProvider) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.mpProvider = mpProvider;
        _this.cards = [];
        _this.user = "";
        _this.showSpinner = true;
        _this.paymentItem = {};
        _this.paymentItem = navParams.get('paymentItem');
        return _this;
    }
    CardsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.showSpinner = true;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].storage.user).then(function (val) {
            _this.user = val;
            console.log("User: " + JSON.stringify(_this.user));
            _this.loadCards();
        });
    };
    CardsPage.prototype.loadCards = function () {
        var _this = this;
        var userId = "-1";
        if (this.user) {
            // this.showLoading("");
            this.mpProvider.getCustomerCards(this.user)
                .then(function (items) {
                console.log(items);
                _this.cards = items;
            })
                .catch(function (error) {
                _this.showError("No pueden traer las tarjetas asociadas");
            })
                .then(function () {
                // this.hideLoading();
                _this.showSpinner = false;
            });
        }
    };
    CardsPage.prototype.addCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */]);
        // this.navCtrl.pop({animate: false});
        // this.navCtrl.push(CardPage, null, {animate: true});
    };
    CardsPage.prototype.selectCard = function (card) {
        // this.navCtrl.push(PaymentPage,{card})
        this.navCtrl.pop({ animate: false });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__payment_payment__["a" /* PaymentPage */], { card: card, paymentItem: this.paymentItem }, { animate: true });
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/cards/cards.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Tarjetas\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="exit" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <div *ngIf="cards.length > 0">\n\n      <ion-grid class="title-grid">\n        <ion-row>\n          <ion-col col-2></ion-col>\n          <ion-col col-8 text-center>\n            <h2>Seleccione una tarjeta</h2>\n          </ion-col>\n          <ion-col col-2></ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- <ion-list-header>\n        Seleccione una tarjeta\n      </ion-list-header> -->\n      <ion-item *ngFor="let card of cards"  (click)="selectCard(card)">\n        <ion-avatar item-start>\n          <img style="object-fit: contain;" [src]="card.payment_method.thumbnail">\n        </ion-avatar>\n        <!-- <ion-thumbnail slot="start">\n          <ion-img [src]="card.payment_method.thumbnail"></ion-img>\n        </ion-thumbnail> -->\n        <!-- <ion-label> -->\n          <h2 style="text-align: center;">**** **** **** {{card.last_four_digits}}</h2>\n        <!-- </ion-label> -->\n      </ion-item>\n    </div>\n\n    <div *ngIf="cards.length <= 0" text-center margin-top>\n      <ion-spinner name="dots" *ngIf="showSpinner"></ion-spinner>\n      <p *ngIf="!showSpinner">No posee tarjetas asociadas</p>\n\n      <!-- <ion-item>\n          <h2>No posee tarjetas asociadas</h2>\n      </ion-item> -->\n    </div>\n\n    <ion-item>\n      <!-- <div class="button-container"> -->\n        <button ion-button block round color="primary" class="default-btn" type="button" (click)="addCard()">Agregar</button>\n      <!-- </div> -->\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/cards/cards.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */]])
    ], CardsPage);
    return CardsPage;
}(__WEBPACK_IMPORTED_MODULE_4__base_base__["a" /* BasePage */]));

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProvidersSettingsProvider = /** @class */ (function (_super) {
    __extends(ProvidersSettingsProvider, _super);
    function ProvidersSettingsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProvidersSettingsProvider.prototype.getApiEndPoint = function () {
        return __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_METHOD_SETTINGS;
    };
    ProvidersSettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ProvidersSettingsProvider);
    return ProvidersSettingsProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=providers-settings.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_article_article__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_subscription_subscription__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_mp_mp__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_filter_popover_filter_popover__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_push_push__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__ = __webpack_require__(60);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(iab, storage, navCtrl, mpProvider, articleProvider, subscriptionProvider, toastCtrl, loadingCtrl, alertCtrl, app, popoverCtrl, pushProvider, device) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.iab = iab;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.mpProvider = mpProvider;
        _this.articleProvider = articleProvider;
        _this.subscriptionProvider = subscriptionProvider;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.app = app;
        _this.popoverCtrl = popoverCtrl;
        _this.pushProvider = pushProvider;
        _this.device = device;
        _this.articles = [{
                "images": ["assets/bandas/107FAUNOS1.png", "assets/bandas/LOSESPIRITUS.png", "assets/bandas/MIAMIGOINVENCIBLE.png"],
                "locked": true,
                "likes": 0,
                "price": 30,
                "like": [],
                "title": "Bandas",
                "content": "",
                "category": "2",
                "access": "PAYMENT",
                "video": null,
                "image": "assets/portadas/1.png",
                "id": "5d94b4301cc23377ed4af51d"
            },
            {
                "images": ["assets/lugar/1.png", "assets/lugar/2.png", "assets/lugar/3.png", "assets/lugar/4.png", "assets/lugar/5.png", "assets/lugar/6.png", "assets/lugar/7.png"],
                "locked": true,
                "likes": 0,
                "price": 30,
                "like": [],
                "title": "Lugar",
                "content": "",
                "category": "2",
                "access": "PAYMENT",
                "video": null,
                "image": "assets/portadas/2.png",
                "id": "5d94b4301cc23377ed4af51d"
            },
            {
                "images": ["assets/entradas/4.png"],
                "locked": true,
                "likes": 0,
                "price": 30,
                "like": [],
                "title": "Entradas",
                "content": "",
                "category": "2",
                "access": "PAYMENT",
                "video": null,
                "image": "assets/portadas/3.png",
                "id": "5d94b4301cc23377ed4af51d"
            },
            {
                "images": [],
                "locked": true,
                "likes": 0,
                "price": 30,
                "like": [],
                "title": "Ayuda",
                "content": "",
                "category": "2",
                "access": "PAYMENT",
                "video": null,
                "image": "assets/portadas/4.png",
                "id": "5d94b4301cc23377ed4af51d"
            }
        ];
        _this.category = __WEBPACK_IMPORTED_MODULE_4__app_app_constants__["a" /* Constants */].CATEGORY;
        _this.user = "-1"; //"5cd1c99480fb4e2594db4b68"
        // user: any = "5cd4ade7ccec8405a6ec30de" //API Seba
        _this.showToolbar = false;
        _this.tabs = navCtrl.parent;
        return _this;
    }
    // ionViewDidEnter(){
    //   this.storage.get(Constants.storage.user).then((val) => {
    //     this.user = val;
    //     this.loadArticles();
    //   });
    // }
    //
    HomePage.prototype.ionViewDidEnter = function () {
        this.intializePage();
    };
    HomePage.prototype.intializePage = function () {
        var _this = this;
        console.log("this.filterSelected ", this.filterSelected);
        console.log("Initialize Page");
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__app_app_constants__["a" /* Constants */].storage.user).then(function (val) {
            _this.user = val;
            console.log("user val: ", _this.user);
            if (_this.user && (_this.user != "-1")) {
                console.log("1 - " + _this.user);
                var userPN = {
                    userApp: _this.user.id
                };
                _this.pushProvider.enablePN(userPN);
                return _this.subscriptionProvider.getByUser(_this.user.id);
            }
            else {
                console.log("2 - " + _this.user);
                if (_this.device.uuid) {
                    var deviceNumber = {
                        userApp: _this.device.uuid
                    };
                    _this.pushProvider.enablePN(deviceNumber);
                }
                return Promise.resolve();
            }
        })
            .then(function (subscription) {
            console.log("suscription: ", subscription);
            if (subscription)
                _this.user.subscription = subscription;
            return _this.storage.set(__WEBPACK_IMPORTED_MODULE_4__app_app_constants__["a" /* Constants */].storage.user, _this.user);
        })
            .then(function () {
            // this.loadArticles();
        });
    };
    HomePage.prototype.loadArticles = function () {
        var _this = this;
        this.showLoading("Cargando");
        var userId = "-1";
        var filters = {};
        if (this.user)
            userId = this.user.id;
        if (this.filterSelected)
            filters.category = this.filterSelected;
        if (this.searchTerm)
            filters.title = this.searchTerm;
        this.articleProvider.getByUser(userId, filters)
            .then(function (items) {
            console.log('items ', items);
            _this.articles = items;
        })
            .then(function (items) {
            _this.hideLoading();
        });
    };
    HomePage.prototype.toogleToolbar = function () {
        if (this.showToolbar == true) {
            this.showToolbar = false;
        }
        else {
            this.showToolbar = true;
        }
    };
    HomePage.prototype.getBackground = function (item) {
        var bg;
        // bg = 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%), url(' + Constants.FILES_BASE_URL + "/" + item.image + ')';
        // bg = 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%), url('  + item.image +  ')';
        bg = 'url(' + item.image + ')';
        return bg;
    };
    HomePage.prototype.showArticle = function (article) {
        console.log("article", article);
        if (article.locked) {
            console.log("article.locked", article.locked);
            if (article.access == "SUBSCRIPTION") {
                this.showConfirmLocked(article);
                // } else if (article.access == "PAYMENT") {
                //   this.showPayment(article);
                // }
            }
            else {
                console.log("else");
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__article_article__["a" /* ArticlePage */], { article: article, access: "PAYMENT" });
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__article_article__["a" /* ArticlePage */], { article: article, access: "PUBLIC" });
        }
    };
    HomePage.prototype.showConfirmLocked = function (article) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Recordatorio',
            message: 'Material disponible para usuarios con suscripción. Desea suscribirse?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.goToSubscription();
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.showPayment = function (article) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Contenido de Pago',
            message: 'Este contenido tiene costo. Desea comprarlo?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.confirmPayment(article);
                    }
                }
            ]
        });
        confirm.present();
    };
    HomePage.prototype.confirmPayment = function (article) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Importante',
            subTitle: 'Si realiza el pago con tarjeta de crédito su pago será procesado en unos instantes. Si elige otras formas de pago el contenido estará disponible cuando su pago se haga efectivo',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Entendido',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.payArticle(article);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.goToSubscription = function () {
        if (this.user && (this.user != "-1")) {
            this.tabs.select(2);
        }
        else {
            console.log("Back to Login");
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
    };
    HomePage.prototype.payArticle = function (article) {
        var _this = this;
        if (this.user && (this.user != "-1")) {
            this.showLoading("Actualizando");
            var self_1 = this;
            this.mpProvider.getArticleInitPoint(this.user, article)
                .then(function (res) {
                console.log(res.initPoint);
                var browser = _this.iab.create(res.initPoint);
                browser.on('exit').subscribe(function (event) {
                    setTimeout(function () {
                        _this.hideLoading();
                        self_1.intializePage();
                    }, 3000);
                });
            })
                .catch(function (error) {
                _this.hideLoading();
                alert("No se puede obtener el link de pago");
            });
        }
        else {
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
    };
    // --------------
    HomePage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_filter_popover_filter_popover__["a" /* FilterPopoverComponent */], { filterSelected: this.filterSelected }, {});
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss((function (data) {
            if (data) {
                _this.filterSelected = data;
            }
            else {
                _this.filterSelected = undefined;
            }
            // this.loadArticles();
        }));
    };
    //Search
    HomePage.prototype.search = function (event) {
        console.log('value ', event.target.value);
        this.searchTerm = event.target.value;
        // this.loadArticles();
    };
    HomePage.prototype.onCancel = function () {
        this.searchTerm = undefined;
        // this.loadArticles();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <ion-buttons left>\n      <button ion-button (click)="toogleToolbar()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-title text-center>\n      <img style="width: 100%; height: 100%;" src="assets/imgs/ARRIBA.png" alt="">\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n  \n  <ion-toolbar [hidden]="!showToolbar" color="gray">\n    <ion-searchbar   \n    [(ngModel)]="searchTerm"\n    [showCancelButton]="shouldShowCancel"\n    (keyup.enter)="search($event)"\n    (ionClear)="onCancel($event)" \n    placeholder="Buscar contenido..."></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="articles-grid">\n    <ion-row>\n\n      <ion-col col-6 *ngFor="let item of articles" (click)="showArticle(item)">\n        <div class="article-container" [ngStyle]="{\'background\': getBackground(item)}" [ngStyle]="{\'background-size\': \'cover\'}">\n          <!-- <div *ngIf="item.price && item.price != 0" class="price-container">\n            ${{item.price}}\n          </div> -->\n          <div class="top-icons" *ngIf="user">\n            <!-- <button ion-button clear *ngIf="item.liked">\n              <ion-icon color="primary" name="heart"></ion-icon>\n            </button>\n            <button ion-button clear *ngIf="!item.liked" click="like()">\n              <p>{{ item.like.length }}</p>\n              <ion-icon color="primary" name="heart-outline"></ion-icon>\n            </button> -->\n            <ion-badge color="primary">{{ item.like.length }}<ion-icon color="white" class="heartIcon" name="heart"></ion-icon>\n            </ion-badge>\n\n\n          </div> \n\n          <ion-grid class="article-content">\n            <ion-row>\n              <ion-col col-12 class="article-title">\n                <!-- <h3>{{item.title}}</h3> -->\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-9 text-left class="article-category">\n                <!-- <span>{{category[item.category]}}</span> -->\n              </ion-col>\n              <!-- <ion-col class="article-lock" col-3 text-right>\n                <ion-icon *ngIf="item.locked" name="lock"></ion-icon>\n              </ion-col> -->\n            </ion-row>\n          </ion-grid>\n\n        </div>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__providers_mp_mp__["a" /* MPProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_article_article__["a" /* ArticleProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_subscription_subscription__["a" /* SubscriptionProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_push_push__["a" /* PushProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_mp_mp__["a" /* MPProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_article_article__["a" /* ArticleProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_subscription_subscription__["a" /* SubscriptionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_12__providers_push_push__["a" /* PushProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__["a" /* Device */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_9__base_base__["a" /* BasePage */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__ = __webpack_require__(300);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsPage = /** @class */ (function (_super) {
    __extends(NotificationsPage, _super);
    // user: any = "-1"; //"5cd1c99480fb4e2594db4b68"
    function NotificationsPage(storage, navCtrl, navParams, toastCtrl, loadingCtrl, notificationProvider) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.notificationProvider = notificationProvider;
        _this.notifications = [
            {
                "title": "Título",
                "message": "Mensaje"
            },
            {
                "title": "Título",
                "message": "Mensaje"
            }
        ];
        _this.notificationsNew = [];
        _this.user = "";
        return _this;
    }
    NotificationsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].storage.user).then(function (val) {
            _this.user = val;
            console.log("User: " + JSON.stringify(_this.user));
            _this.loadNotifications();
        });
    };
    NotificationsPage.prototype.loadNotifications = function () {
        var _this = this;
        var userId = "-1";
        if (this.user) {
            this.notificationProvider.getByUser(this.user.id)
                .then(function (items) {
                console.log(items);
                _this.notifications = items;
            });
        }
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Notificaciones\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let item of notifications">\n      <h2>{{item.title}}</h2>\n      <p margin-top margin-bottom>{{item.message}}</p>\n      <span class="date">{{item.timestamp | date:\'dd/MM/yyyy\'}}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/notifications/notifications.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_notification_notification__["a" /* NotificationProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}(__WEBPACK_IMPORTED_MODULE_4__base_base__["a" /* BasePage */]));

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_cards__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_subscription_subscription__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_providers_settings_providers_settings__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home__ = __webpack_require__(118);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ProfilePage = /** @class */ (function (_super) {
    __extends(ProfilePage, _super);
    function ProfilePage(iab, app, storage, navCtrl, mpProvider, userProvider, formBuilder, toastCtrl, loadingCtrl, subscriptionProvider, providersSettingsProvider) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.iab = iab;
        _this.app = app;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.mpProvider = mpProvider;
        _this.userProvider = userProvider;
        _this.formBuilder = formBuilder;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.subscriptionProvider = subscriptionProvider;
        _this.providersSettingsProvider = providersSettingsProvider;
        _this.subscriptionEnabled = false;
        _this.form = _this.createForm();
        return _this;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_constants__["a" /* Constants */].storage.user).then(function (val) {
            _this.user = val;
            if (_this.user) {
                _this.checkSuscription();
                _this.setFormValues();
            }
        });
        this.gettingPrice();
    };
    ProfilePage.prototype.gettingPrice = function () {
        var _this = this;
        console.log("gettingPrice");
        this.providersSettingsProvider.getAll()
            .then(function (sets) {
            console.log("sets: ", sets);
            _this.price = sets[0].subscription;
        }).catch(function (error) { return console.log(error); });
    };
    ProfilePage.prototype.checkSuscription = function () {
        var _this = this;
        this.subscriptionProvider.getByUser(this.user.id)
            .then(function (subscription) {
            if (subscription)
                _this.user.subscription = subscription;
            return _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__app_app_constants__["a" /* Constants */].storage.user, _this.user);
        })
            .then(function () {
            if (_this.user.subscription) {
                var sd = new Date(_this.user.subscription.timestampUpdate);
                sd.setMonth(sd.getMonth() + 1);
                var d = new Date();
                _this.subscriptionEnabled = d.getTime() <= sd.getTime();
            }
        })
            .then(function () {
            //this.onLoad()
        });
    };
    ProfilePage.prototype.createForm = function () {
        return this.formBuilder.group({
            user: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_11__angular_forms__["f" /* Validators */].required],
            birthDate: ['01-01-1980'],
            nationality: [''],
            //inscription: [''],
            dni: [''],
            address: [''],
            locality: [''],
            mpCustomerId: [''],
            tel: ['']
        });
    };
    ProfilePage.prototype.setFormValues = function () {
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
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.storage.clear()
            .then(function () {
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        });
    };
    ProfilePage.prototype.loadCustomerCards = function () {
        var paymentItem = {
            code: "SUBSCRIPTION",
            description: "Suscripcion Mensual"
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cards_cards__["a" /* CardsPage */], { paymentItem: paymentItem });
    };
    ProfilePage.prototype.paySubscription = function () {
        if (this.user.mpCustomerId && this.user.mpCustomerId != '')
            this.loadCustomerCards();
        else
            this.createCustomer();
        // if(this.user.mpCustomerId !='')
        //   this.loadCustomerCards();
        // else
        //   this.createCustomer();
    };
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
    ProfilePage.prototype.createCustomer = function () {
        var _this = this;
        this.showLoading();
        this.mpProvider.createCustomer(this.user)
            .then(function (res) {
            console.log(res);
            _this.form.controls['mpCustomerId'].setValue(res.id);
            var user = _this.form.value;
            user.id = _this.user.id;
            _this.userProvider.update(user)
                .then(function (res) {
                console.log(res);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__app_app_constants__["a" /* Constants */].storage.user, user);
                _this.showSuccess("Se actualizó con éxito");
                _this.loadCustomerCards();
            })
                .catch(function (error) {
                _this.showError("No se ha podido actualizar");
            })
                .then(function () {
                _this.hideLoading();
            });
        })
            .catch(function (error) {
            _this.hideLoading();
            alert(error);
        });
    };
    ProfilePage.prototype.update = function () {
        var _this = this;
        var user = this.form.value;
        user.id = this.user.id;
        var self = this;
        this.userProvider.update(user)
            .then(function (res) {
            console.log(res);
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__app_app_constants__["a" /* Constants */].storage.user, user);
            _this.showSuccess("Se actualizó con éxito");
        })
            .catch(function (error) {
            _this.showError("No se ha podido actualizar");
        })
            .then(function () {
            _this.hideLoading();
        });
    };
    ProfilePage.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__home_home__["a" /* HomePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-contact',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Mi Perfil\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="exit" color="white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="!subscriptionEnabled" class="subscription-card">\n    <ion-card-header>\n      Usuario Premium\n      <ion-icon name="star"></ion-icon>\n    </ion-card-header>\n    <ion-card-content>\n      Siendo un usuario premium podés acceder a contenidos destacados, cursos en video, y muchas otras cosas mas.\n      Suscribite ahora por solo ${{ price }} mensuales.\n      <ion-grid margin-top no-padding>\n        <ion-row>\n          <ion-col col-4>\n            <img src="assets/imgs/mercadopago.png" alt="">\n          </ion-col>\n          <ion-col col-2>\n\n          </ion-col>\n          <ion-col col-6 text-right>\n            <button no-margin ion-button block outline round color="primary" (click)="paySubscription()">Suscribite aquí</button>\n            <!-- <span ion-text color="primary">Suscribite aquí</span> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <!-- <div class="button-container" *ngIf="!subscriptionEnabled">\n    <button ion-button block round color="danger" class="default-btn" (click)="paySubscription()">Pagar\n      Suscripción</button>\n  </div> -->\n  <form (ngSubmit)="update()" [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Nombre *</ion-label>\n      <ion-input formControlName="firstName" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Apellido *</ion-label>\n      <ion-input formControlName="lastName" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Email *</ion-label>\n      <ion-input formControlName="user" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Fecha de Nacimiento</ion-label>\n      <ion-input type="date" value="1980-12-12" formControlName="birthDate"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label stacked>Nro de Inscripción</ion-label>\n      <ion-input type="text" formControlName="inscription"></ion-input>\n    </ion-item> -->\n    <ion-item>\n      <ion-label stacked>DNI</ion-label>\n      <ion-input type="text" formControlName="dni"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Nacionalidad</ion-label>\n      <ion-input type="text" formControlName="nationality"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Domicilio</ion-label>\n      <ion-input type="text" formControlName="address"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Localidad</ion-label>\n      <ion-input type="text" formControlName="locality"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Teléfono</ion-label>\n      <ion-input type="text" formControlName="tel"></ion-input>\n    </ion-item>\n    <div class="button-container">\n      <button ion-button block round color="primary" class="default-btn" type="submit" [disabled]="!form.valid" (click)="goHome()">Actualizar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/profile/profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_subscription_subscription__["a" /* SubscriptionProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_providers_settings_providers_settings__["a" /* ProvidersSettingsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_subscription_subscription__["a" /* SubscriptionProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_providers_settings_providers_settings__["a" /* ProvidersSettingsProvider */]])
    ], ProfilePage);
    return ProfilePage;
}(__WEBPACK_IMPORTED_MODULE_8__base_base__["a" /* BasePage */]));

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__ = __webpack_require__(38);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function getErrorText(errorCode) {
    if (errorCode == "205")
        return "Ingresa el número de tu tarjeta.";
    if (errorCode == "208")
        return "Ingrese mes de expiración.";
    if (errorCode == "209")
        return "Ingrese año de expiración.";
    if (errorCode == "212")
        return "Ingresa tu documento.";
    if (errorCode == "213")
        return "Ingresa tu documento.";
    if (errorCode == "214")
        return "Ingresa tu documento.";
    if (errorCode == "220")
        return "Ingresa tu banco emisor.";
    if (errorCode == "221")
        return "Ingresa el nombre y apellido.";
    if (errorCode == "224")
        return "Ingresa el código de seguridad.";
    if (errorCode == "E301")
        return "Hay algo mal en ese número. Vuelve a ingresarlo.";
    if (errorCode == "E302")
        return "Revisa el código de seguridad.";
    if (errorCode == "316")
        return "Ingresa un nombre válido.";
    if (errorCode == "322")
        return "Revisa tu documento.";
    if (errorCode == "323")
        return "Revisa tu documento.";
    if (errorCode == "324")
        return "Revisa tu documento.";
    if (errorCode == "325")
        return "Revisa el mes de expiración.";
    if (errorCode == "326")
        return "Revisa el año de expiración.";
    return "Revisa los datos.";
}
function getBin() {
    var ccNumber = document.querySelector('input[data-checkout="cardNumber"]');
    return ccNumber.value.replace(/[ .-]/g, '').slice(0, 6);
}
;
var bin;
function guessingPaymentMethod() {
    bin = getBin();
    if (bin.length >= 6) {
        Mercadopago.getPaymentMethod({
            "bin": bin
        }, setPaymentMethodInfo);
    }
}
;
function guessingPaymentMethodOri(event) {
    bin = getBin();
    if (event.type == "keyup") {
        if (bin.length >= 6) {
            Mercadopago.getPaymentMethod({
                "bin": bin
            }, setPaymentMethodInfo);
        }
    }
    else {
        setTimeout(function () {
            if (bin.length >= 6) {
                Mercadopago.getPaymentMethod({
                    "bin": bin
                }, setPaymentMethodInfo);
            }
        }, 100);
    }
}
;
var identificationTypes = {};
function identificationTypesHandler(data, response) {
    console.log(response);
    identificationTypes = response;
}
// cuotas
var installments;
function installmentsHandler(status, response) {
    installments = response;
    console.log(installments);
    alert(JSON.stringify(installments));
}
//emisores de tarjeta
var issuers = {};
function issuersHandler(status, response) {
    issuers = response;
    console.log(issuers);
    alert(JSON.stringify(issuers));
}
var paymentMethodInfo = {};
function setPaymentMethodInfo(status, response) {
    console.log("setPaymentMethodInfo");
    console.log(status);
    console.log(response);
    paymentMethodInfo = response;
    if (status == 200) {
        // do somethings ex: show logo of the payment method
        var form = document.querySelector('#pay');
        if (document.querySelector("input[name=paymentMethodId]") == null) {
            var paymentMethod = document.createElement('input');
            paymentMethod.setAttribute('name', "paymentMethodId");
            paymentMethod.setAttribute('type', "hidden");
            paymentMethod.setAttribute('value', response[0].id);
            form.appendChild(paymentMethod);
        }
        else {
            var pmi = document.querySelector("input[name=paymentMethodId]");
            pmi.value = response[0].id;
        }
        // doPay();
    }
}
;
var token = {};
function doPay() {
    var $form = document.querySelector('#pay');
    Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below
}
;
function sdkResponseHandler(status, response) {
    console.log(response);
    // alert(JSON.stringify(response));
    if (status != 200 && status != 201) {
        alert("verify filled data");
    }
    else {
        var form = document.querySelector('#pay');
        var card = document.createElement('input');
        card.setAttribute('name', "token");
        card.setAttribute('type', "hidden");
        card.setAttribute('value', response.id);
        form.appendChild(card);
        // doSubmit=true;
        // form.submit();
        token = response;
        makePayment();
    }
}
;
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
    }
    else {
        var form = document.querySelector('#pay');
        var card = document.createElement('input');
        card.setAttribute('name', "token");
        card.setAttribute('type', "hidden");
        card.setAttribute('value', response.id);
        form.appendChild(card);
        // doSubmit=true;
        // form.submit();
        token = response;
        addCard();
    }
}
;
function makePayment() {
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
        paymentToken: token,
        paymentTransaction: {
            amount: 123,
            description: "desc",
            installments: 3,
            methodId: "visa",
            payerEmail: "jmoreno1976@gmail.com"
        }
    };
    console.log(js);
    var data = JSON.stringify(js);
    xhr.send(data);
}
var customerId = "";
var addCardUrl = "";
function addCard() {
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
        token: token.id
    };
    console.log(js);
    var data = JSON.stringify(js);
    xhr.send(data);
    // localStorage.setItem('CARD', data);
}
// creditCardKeypress(kc){
//   console.log(kc);
//   guessingPaymentMethod();
// }
var CardPage = /** @class */ (function (_super) {
    __extends(CardPage, _super);
    function CardPage(storage, navCtrl, navParams, toastCtrl, loadingCtrl, mpProvider) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.mpProvider = mpProvider;
        _this.user = "";
        _this.docTypes = [{ id: "DNI", name: "DNI" }, { id: "LE", name: "LE" }];
        return _this;
    }
    CardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].storage.user).then(function (val) {
            _this.user = val;
            console.log("User: " + JSON.stringify(_this.user));
        });
        console.log(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].mp[__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].mp.env].publicKey);
        Mercadopago.setPublishableKey(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].mp[__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].mp.env].publicKey);
        Mercadopago.getIdentificationTypes();
        Mercadopago.getIdentificationTypes(identificationTypesHandler);
        console.log("did enter");
    };
    CardPage.prototype.createToken = function () {
        console.log("createToken--------");
        var $form = document.querySelector('#pay');
        customerId = this.user.mpCustomerId;
        addCardUrl = __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_BASE_URL + __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_METHOD_MP + "/customers/" + customerId + "/cards";
        localStorage.removeItem('STATUS');
        Mercadopago.createToken($form, createTokenHandler); // The function "sdkResponseHandler" is defined below
        this.checkStatus();
    };
    CardPage.prototype.checkStatus = function () {
        var _this = this;
        setTimeout(function () {
            var status = localStorage.getItem("STATUS");
            if (!status) {
                _this.checkStatus();
            }
            else {
                if (status == "OK") {
                    _this.showSuccess("Tarjeta agregada correctamente");
                    _this.navCtrl.pop();
                    // let card = JSON.parse(localStorage.getItem("CARD"));
                    // this.navCtrl.pop({animate: false});
                    // this.navCtrl.push(PaymentPage, {card}, {animate: true});
                }
                else {
                    _this.showError(localStorage.getItem("ERROR"));
                }
            }
        }, 2000);
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/card/card.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Tarjeta\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="exit" color="primary"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid class="title-grid">\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8 text-center>\n        <h2>Ingrese los datos de su tarjeta</h2>\n        <p>Completá los siguientes campos</p>\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n  </ion-grid>\n  <form class="cool-form"  action="" method="post" id="pay" name="pay">\n\n    <ion-grid >\n      <ion-row >\n          <label ion-text for="email">Email</label>\n      </ion-row>\n\n      <ion-row >\n            <input id="email" name="email" disabled value="{{user.user}}" type="email" placeholder="your email"/>\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardNumber">Número de tarjeta</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="securityCode">Código de seguridad</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardExpirationMonth">Mes de expiración</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="12" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardExpirationYear">Año de expiración</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2020"/>\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardholderName">Nombre de la persona (que aparece en la tarjeta)</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="docType">Tipo de documento</label>\n      </ion-row>\n\n      <ion-row>\n          <select id="docType" data-checkout="docType"></select>\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="docNumber">Numero de documento</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="docNumber" data-checkout="docNumber" placeholder="12345678" />\n      </ion-row>\n\n    </ion-grid>\n<!--\n    <ion-grid >\n      <ion-row >\n          <label ion-text for="email">Email</label>\n      </ion-row>\n\n      <ion-row >\n            <input id="email" name="email" value="{{user.user}}" type="email" placeholder="your email"/>\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardNumber">Número de tarjeta</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardNumber" value="4509 9535 6623 3704" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="securityCode">Código de seguridad</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="securityCode" value="123" data-checkout="securityCode" placeholder="123" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardExpirationMonth">Mes de expiración</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardExpirationMonth" value="12" data-checkout="cardExpirationMonth" placeholder="12" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardExpirationYear">Año de expiración</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardExpirationYear" value="2020" data-checkout="cardExpirationYear" placeholder="2020"/>\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="cardholderName">Nombre de la persona (que aparece en la tarjeta)</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="cardholderName" value="APRO" data-checkout="cardholderName" placeholder="APRO" />\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="docType">Tipo de documento</label>\n      </ion-row>\n\n      <ion-row>\n          <select id="docType" data-checkout="docType"></select>\n      </ion-row>\n\n      <ion-row>\n          <label ion-text for="docNumber">Numero de documento</label>\n      </ion-row>\n\n      <ion-row>\n          <input type="text" id="docNumber" value="12345678" data-checkout="docNumber" placeholder="12345678" />\n      </ion-row>\n\n    </ion-grid> -->\n\n    <input type="hidden" name="paymentMethodId" />\n\n    <div class="separator"></div>\n    <div class="button-container">\n      <button ion-button block round color="white" class="default-btn" type="button" (click)="createToken()" >Agregar</button>\n    </div>\n    <div class="separator"></div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/card/card.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */]])
    ], CardPage);
    return CardPage;
}(__WEBPACK_IMPORTED_MODULE_4__base_base__["a" /* BasePage */]));

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers_settings_providers_settings__ = __webpack_require__(117);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentPage = /** @class */ (function (_super) {
    __extends(PaymentPage, _super);
    function PaymentPage(storage, navCtrl, navParams, toastCtrl, loadingCtrl, mpProvider, providersSettingsProvider) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.mpProvider = mpProvider;
        _this.providersSettingsProvider = providersSettingsProvider;
        _this.user = "";
        _this.card = {};
        _this.paymentItem = {};
        _this.card = navParams.get('card');
        _this.paymentItem = navParams.get('paymentItem');
        console.log(_this.card);
        console.log(_this.paymentItem);
        return _this;
    }
    PaymentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].storage.user).then(function (val) {
            _this.user = val;
            console.log("User: " + JSON.stringify(_this.user));
        });
        this.gettingPrice();
    };
    PaymentPage.prototype.pay = function () {
        // alert(this.securityCode);
        var _this = this;
        this.showLoading();
        this.mpProvider.getCustomerCardToken(this.user, this.card, this.securityCode)
            .then(function (res) {
            console.log(res);
            _this.mpProvider.createPayment(_this.user, res.id, _this.price, _this.paymentItem.description, _this.paymentItem.code, _this.paymentItem.articleId, 1, _this.card.payment_method.id, _this.paymentItem.externaReference)
                .then(function (payment) {
                console.log(payment);
                _this.showError("Pago registrado con exito");
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                _this.showError("No se puede realizar el pago");
            })
                .then(function () {
                _this.hideLoading();
            });
        })
            .catch(function (error) {
            _this.showError("No se puede realizar el pago con esta tarjeta");
        })
            .then(function () {
            _this.hideLoading();
        });
    };
    PaymentPage.prototype.gettingPrice = function () {
        var _this = this;
        console.log("gettingPrice");
        this.providersSettingsProvider.getAll()
            .then(function (sets) {
            console.log("sets: ", sets);
            _this.price = sets[0].subscription;
        }).catch(function (error) { return console.log(error); });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/payment/payment.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Pago\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only >\n        <ion-icon name="exit" color="primary"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid class="title-grid">\n      <ion-row>\n        <ion-col col-2></ion-col>\n        <ion-col col-8 text-center>\n          <h2>Confirmacion</h2>\n          <p>El costo del servicio es de $ {{price}}</p>\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <form class="cool-form">\n      <ion-item>\n        <ion-label stacked>Ingrese código de seguridad de la tarjeta</ion-label>\n        <ion-input type="number" [(ngModel)]="securityCode" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n\n      <div class="separator"></div>\n      <div class="button-container">\n        <button ion-button block round color="white" class="default-btn" type="button" (click)="pay()">Pagar</button>\n      </div>\n      <div class="separator"></div>\n    </form>\n\n\n    <!-- <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Codigo seguridad</ion-label>\n      <ion-input type="number" [(ngModel)]="securityCode"></ion-input>\n    </ion-item>\n\n    <div class="button-container">\n      <button ion-button block round color="primary" class="default-btn" type="button" (click)="pay()">Pagar</button>\n    </div> -->\n\n  <!-- </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/payment/payment.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_providers_settings_providers_settings__["a" /* ProvidersSettingsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers_settings_providers_settings__["a" /* ProvidersSettingsProvider */]])
    ], PaymentPage);
    return PaymentPage;
}(__WEBPACK_IMPORTED_MODULE_4__base_base__["a" /* BasePage */]));

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_article_article__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cards_cards__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_document_viewer__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_opener___ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// PDF




var ArticlePage = /** @class */ (function () {
    function ArticlePage(youtube, navCtrl, navParams, storage, alertCtrl, app, mpProvider, iab, userProvider, articleProvider, platform, document, file, ft, fileOpener, loadingCtrl) {
        var _this = this;
        this.youtube = youtube;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.mpProvider = mpProvider;
        this.iab = iab;
        this.userProvider = userProvider;
        this.articleProvider = articleProvider;
        this.platform = platform;
        this.document = document;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.loadingCtrl = loadingCtrl;
        this.item = {
            id: 1,
            title: "Este es el título del artículo",
            category: "PRODUCTO",
            image: "assets/imgs/peinado.jpg",
            liked: false,
            locked: true,
            content: "<p>Fap jean shorts heirloom post-ironic squid viral Godard DIY Blue Bottle food truck +1 master cleanse Cosby sweater cardigan trust fund YOLO craft beer hoodie polaroid messenger bag banh mi you probably haven't heard of them Carles Kickstarter keytar Tonx hashtag selfies cliche drinking vinegar cred deep v Tumblr seitan wolf sustainable vegan quinoa beard single- origin </p><p>Coffee chambray kogi chillwave direct trade gastropub flannel roof party 3 wolf moon hella small batch mixtape scenester McSweeney's biodiesel brunch try-hard Helvetica Pitchfork raw denim stumptown kitsch photo booth selvage wayfarers bicycle rights irony yr four loko Marfa Schlitz dreamcatcher fingerstache blog twee disrupt lo-fi Intelligentsia </p><p>Leggings Brooklyn Portland banjo put a bird on it Etsy American Apparel tofu mumblecore Wes Anderson XOXO salvia fashion axe locavore art party forage artisan VHS retro letterpress pour - over Vice 8 - bit normcore semiotics Truffaut sriracha vinyl street art chia ugh narwhal next level 90's Austin meggings keffiyeh gluten-free farm-to-table occupy organic whatever plaid tattooed paleo pug church - key butcher cray bespoke PBR & B Shoreditch </p><p>Lomo shabby chic gentrify freegan mlkshk flexitarian PBR kale chips ethical Thundercats pop - up Banksy ennui iPhone Williamsburg pork belly mustache Echo Park skateboard slow - carb crucifix swag tousled Neutra Odd Future bitters fixie pickled High Life actually umami cornhole before they sold out asymmetrical Pinterest Bushwick </p>"
        };
        this.category = __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].CATEGORY;
        this.likedByUser = false;
        this.amountOfLikes = 0;
        this.article = this.navParams.get('article');
        console.log(this.article);
        this.access = this.navParams.get('access');
        ///
        // this.article.images = [];
        // if(this.article.images.length <= 0) this.article.images.push(this.article.image);
        this.storage.get(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].storage.user).then(function (val) {
            _this.user = val;
        });
    }
    ArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticlePage');
    };
    ArticlePage.prototype.ionViewDidEnter = function () {
        console.log("ionViewWillEnter");
        // isLiked
        if (this.user) {
            for (var _i = 0, _a = this.article.like; _i < _a.length; _i++) {
                var i = _a[_i];
                console.log("i" + i);
                console.log("this.user.id" + this.user.id);
                if (i.id == this.user.id) {
                    this.likedByUser = true;
                    console.log(this.likedByUser);
                }
            }
        }
    };
    ArticlePage.prototype.getBackground = function (image) {
        console.log(image);
        var bg;
        // bg = 'linear-gradient(rgba(244, 244, 244, 0), rgba(244, 244, 244, 0.5) 70%, rgba(244, 244, 244, 1) 100%), url(' + Constants.FILES_BASE_URL + "/" + image + ')';
        bg = 'url(' + image + ')';
        return bg;
    };
    ///// JUNGLA
    ArticlePage.prototype.openVideo = function () {
        this.youtube.openVideo(this.article.video);
    };
    ArticlePage.prototype.goProfile = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]);
    };
    ArticlePage.prototype.openMap = function () {
        this.youtube.openVideo(this.article.video);
    };
    /////
    ArticlePage.prototype.confirmPayment = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Importante',
            subTitle: 'La acreditación inmediata de su pago es solo con tarjeta de crédito.',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Entendido',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.payArticle();
                    }
                }
            ]
        });
        alert.present();
    };
    ArticlePage.prototype.payArticle = function () {
        if (this.user && (this.user != "-1")) {
            if (this.user.mpCustomerId && this.user.mpCustomerId != '')
                this.loadCustomerCards();
            else
                this.createCustomer();
        }
        else {
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
    };
    ArticlePage.prototype.createCustomer = function () {
        var _this = this;
        this.showLoading();
        this.mpProvider.createCustomer(this.user)
            .then(function (res) {
            console.log(res);
            _this.user.mpCustomerId = res.id;
            _this.userProvider.update(_this.user)
                .then(function (res) {
                console.log(res);
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].storage.user, _this.user);
                //this.showSuccess("Se actualizó con éxito");
                _this.loadCustomerCards();
            })
                .catch(function (error) {
                alert("No se ha podido actualizar");
            })
                .then(function () {
                _this.hideLoading();
            });
        })
            .catch(function (error) {
            _this.hideLoading();
            alert(error);
        });
    };
    ArticlePage.prototype.loadCustomerCards = function () {
        var paymentItem = {
            code: "ARTICLE",
            description: this.article.title,
            articleId: this.article.id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__cards_cards__["a" /* CardsPage */], { paymentItem: paymentItem });
    };
    ArticlePage.prototype.payArticleOld = function () {
        var _this = this;
        if (this.user && (this.user != "-1")) {
            var self_1 = this;
            this.mpProvider.getArticleInitPoint(this.user, this.article)
                .then(function (res) {
                console.log(res.initPoint);
                var browser = _this.iab.create(res.initPoint);
                browser.on('exit').subscribe(function (event) {
                    setTimeout(function () {
                        self_1.navCtrl.pop();
                    }, 1500);
                });
            })
                .catch(function (error) {
                alert("No se puede obtener el link de pago");
            });
        }
        else {
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
    };
    // -----------
    //
    ArticlePage.prototype.like = function () {
        this.likedByUser = true;
        var articleItem = {
            id: this.article.id,
            like: this.article.like
        };
        articleItem.like.push(this.user);
        this.articleProvider.update(articleItem)
            .then(function (articleU) {
            console.log(articleU);
            // this.countLikes()
        }).catch(function (error) {
            console.log("error1: " + error);
        });
    };
    //
    ArticlePage.prototype.unLike = function () {
        var _this = this;
        console.log("unlike");
        for (var _i = 0, _a = this.article.like; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.id == this.user.id) {
                console.log(this.likedByUser);
                var index = this.article.like.indexOf(i);
                var articleItem = {
                    id: this.article.id,
                    like: this.article.like
                };
                articleItem.like.splice(index, 1);
                this.articleProvider.update(articleItem)
                    .then(function (articleU) {
                    console.log(articleU);
                    _this.likedByUser = false;
                    _this.countLikes();
                }).catch(function (error) {
                    alert("error: " + error);
                });
            }
        }
    };
    //
    ArticlePage.prototype.countLikes = function () {
        var _this = this;
        this.articleProvider.getById(this.article.id)
            .then(function (articleG) {
            console.log("articleG" + articleG);
            _this.amountOfLikes = articleG['like'].length;
        });
    };
    ArticlePage.prototype.openFile = function () {
        var _this = this;
        var downloadUrl = __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].FILES_BASE_URL + '/' + this.article.pdf;
        var path = this.file.dataDirectory;
        var transfer = this.ft.create();
        this.showLoading("Descargando documento");
        transfer.download(downloadUrl, path + this.article.title)
            .then(function (entry) {
            var url = entry.toURL();
            if (_this.platform.is('ios')) {
                _this.document.viewDocument(url, 'application/pdf', {});
            }
            else {
                _this.fileOpener.open(url, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); })
                    .then(function () { return _this.hideLoading(); });
            }
        })
            .catch(function (e) { return console.log('Error opening file', e); })
            .then(function () { return console.log('File finish final'); });
    };
    ArticlePage.prototype.showLoading = function (content) {
        console.log("Cargador...");
        if (!content)
            content = '';
        this.loading = this.loadingCtrl.create({
            content: content
        });
        this.loading.present();
    };
    ArticlePage.prototype.hideLoading = function () {
        console.log("Ocultar cargador...");
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/article/article.html"*/'<!--\n  Generated template for the ArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{article.title}}</ion-title>\n\n    <!-- <ion-buttons end *ngIf="user">\n      <button ion-button clear *ngIf="!likedByUser" (click)="like()">\n        <ion-icon color="light" name="heart-outline"></ion-icon>\n      </button>\n      <button ion-button clear *ngIf="likedByUser" (click)="unLike()">\n        <ion-icon color="light" name="heart"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n    <ion-slide *ngFor="let image of article.images" [ngStyle]="{\'background\': getBackground(image)}"\n      [ngStyle]="{\'background-size\': \'cover\'}">\n      <!-- <div class="article-header" padding>\n        <h2 class="title">{{article.title}}</h2>\n        <p class="category">{{category[article.category]}}</p>\n        <h2 *ngIf="article.price" class="price">${{article.price}}</h2>\n      </div> -->\n    </ion-slide>\n  </ion-slides>\n\n  <!-- <ion-card>\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col size="6" class="likeRow">\n          {{ amountOfLikes }}\n        </ion-col>\n        <ion-col size="6">\n          <button ion-button clear *ngIf="!likedByUser" (click)="like()">\n            <ion-icon color="primary" name="heart-outline"></ion-icon>\n          </button>\n\n          <button ion-button clear *ngIf="likedByUser" (click)="unLike()">\n            <ion-icon color="primary" name="heart"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card> -->\n\n  <!-- <ion-card *ngIf="article.content">\n    <ion-card-content [innerHTML]="article.content" >\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="(article.video) && (article.video != \'\')">\n    <ion-item (click)="openVideo()">\n      <ion-icon item-start name="ios-videocam" color="primary"></ion-icon>\n      <h2>Ingresa al video</h2>\n      <ion-icon item-end name="ios-arrow-forward" color="primary"></ion-icon>\n    </ion-item>\n  </ion-card>\n  <ion-card *ngIf="(article.pdf) && (article.pdf != \'\')">\n    <ion-item (click)="openFile()">\n      <ion-icon item-start name="document" color="primary"></ion-icon>\n      <h2>Documento</h2>\n      <ion-icon item-end name="ios-arrow-forward" color="primary"></ion-icon>\n    </ion-item>\n  </ion-card> -->\n</ion-content>\n\n<ion-footer *ngIf="article.title == \'Bandas\'">\n  <button ion-button block icon-left (click)="openVideo()">\n    <ion-icon name="play"></ion-icon>\n    Ver video\n  </button>\n</ion-footer>\n<ion-footer *ngIf="article.title == \'Lugar\'">\n  <button ion-button block icon-left (click)="openVideo()">\n    <ion-icon name="map"></ion-icon>\n    Ver en mapa\n  </button>\n</ion-footer>\n<ion-footer *ngIf="article.title == \'Entradas\'">\n  <button ion-button block icon-left (click)="goProfile()">\n    <ion-icon name="flame"></ion-icon>\n    Solicitá tu entrada!\n  </button>\n</ion-footer>\n<ion-footer *ngIf="article.title == \'Ayuda\'">\n  <!-- <button ion-button block icon-left (click)="openVideo()">\n    <ion-icon name="cart"></ion-icon>\n    Ayuda\n  </button> -->\n</ion-footer>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/article/article.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_article_article__["a" /* ArticleProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__providers_mp_mp__["a" /* MPProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_article_article__["a" /* ArticleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_opener___["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArticleProvider = /** @class */ (function (_super) {
    __extends(ArticleProvider, _super);
    function ArticleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArticleProvider.prototype.getApiEndPoint = function () {
        return __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_METHOD_ARTICLES;
    };
    ArticleProvider.prototype.getByUser = function (pUserId, filters) {
        var _this = this;
        var userId = "-1";
        if (pUserId) {
            userId = pUserId;
        }
        if (filters.title) {
            // filters.title = new RegExp(filters.title, 'i');
            filters.title = { "$regex": filters.title, "$options": "i" };
            console.log("RegExp", new RegExp(filters.title, 'i'));
        }
        console.log("filters.title", filters.title);
        var url = this.getServerUrl() + this.getApiEndPoint()
            + "/user/" + userId + '?_filters=' + encodeURI(JSON.stringify(filters));
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (items) {
            _this.saveItems(items);
            return items;
        })
            .catch(function (response) {
            console.log(response);
            if (response.status == 0) {
                return Promise.resolve(_this.getItems());
            }
            else {
                return _this.handleError(response);
            }
        });
        //  .catch(this.handleError.bind(this));
    };
    ArticleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ArticleProvider);
    return ArticleProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FilterPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FilterPopoverComponent = /** @class */ (function () {
    function FilterPopoverComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.categories = __WEBPACK_IMPORTED_MODULE_1__app_app_constants__["a" /* Constants */].CATEGORIES;
        console.log('Hello FilterPopoverComponent Component');
        this.filterSelected = navParams.get('filterSelected');
        console.log(this.filterSelected);
        this.markSelected();
    }
    FilterPopoverComponent.prototype.close = function (data) {
        this.viewCtrl.dismiss(data);
    };
    FilterPopoverComponent.prototype.markSelected = function () {
        var _this = this;
        this.categories.forEach(function (element) {
            element.selected = false;
            if (element.id == _this.filterSelected) {
                element.selected = true;
            }
        });
    };
    FilterPopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'filter-popover',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/components/filter-popover/filter-popover.html"*/'<ion-list>\n  <ion-list-header>Seleccione Tipo</ion-list-header>\n  <button [ngClass]="{\'active\': !filterSelected}" ion-item (click)="close()">Todos</button>\n  <button [ngClass]="{\'active\': item.selected}" *ngFor="let item of categories" ion-item (click)="close(item.id)">{{item.name}}</button>\n</ion-list>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/components/filter-popover/filter-popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], FilterPopoverComponent);
    return FilterPopoverComponent;
}());

//# sourceMappingURL=filter-popover.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.showHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        localStorage.setItem('CANADEZ_WELCOME', "true");
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-slides pager>\n    <ion-slide>\n      <img src="assets/imgs/bienvenidos.png" alt="">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/productos.png" alt="">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/herramientas.png" alt="">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/capacitaciones.png" alt="">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/catalogos.png" alt="">\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/imgs/novedades.png" alt="">\n    </ion-slide>\n\n    <!-- <ion-slide>\n      <img src="assets/imgs/tutoriales.png" alt="">\n    </ion-slide> -->\n\n    <ion-slide>\n      <ion-toolbar>\n        <ion-buttons end>\n          <button ion-button large class="button-class" (click)="showHome()">TERMINAR</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <!-- <img src="assets/imgs/welcome.png" alt=""> -->\n      <img src="assets/imgs/tutoriales.png" alt="">\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasePage = /** @class */ (function () {
    function BasePage(toastCtrl, loadingCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.formObject = { value: null };
    }
    // (+) Loading
    BasePage.prototype.showLoading = function (content) {
        if (!content)
            content = '';
        this.loading = this.loadingCtrl.create({
            content: content
        });
        if (!this.loading) {
            this.loading.present();
        }
    };
    BasePage.prototype.hideLoading = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    // (-) Loading
    // (+) Message
    BasePage.prototype.showSuccess = function (message) {
        this.showMessage(message, "toast-success");
    };
    BasePage.prototype.showError = function (message) {
        this.showMessage(message, "toast-error");
    };
    BasePage.prototype.showWarning = function (message) {
        this.showMessage(message, "toast-warning");
    };
    BasePage.prototype.showMessage = function (message, cssClass) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: cssClass,
            duration: 4000,
            position: 'top'
        });
        toast.present();
    };
    // (-) Message
    // (+) Utils
    BasePage.prototype.getDayFormatted = function (timemillis) {
        var date = new Date(timemillis);
        var sd = new Date(date.valueOf());
        return sd.getDate() + '/' + (sd.getMonth() + 1) + '/' + sd.getFullYear();
    };
    BasePage.prototype.getYearsOld = function (timemillis) {
        var date = new Date(timemillis);
        var sd = new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
        var today = this.getToday();
        var yearsOld = today.getFullYear() - sd.getFullYear();
        return yearsOld;
    };
    BasePage.prototype.getHHMMFormatted = function (time) {
        //var sd = new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
        var date = new Date(time);
        var sd = new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
        var ret = "";
        var hours = sd.getHours();
        if (hours == 0)
            ret = "00";
        else if (hours < 10)
            ret = "0" + hours;
        else
            ret = "" + hours;
        ret += ":";
        var minutes = sd.getMinutes();
        if (minutes == 0)
            ret += "00";
        else if (minutes < 10)
            ret += "0" + minutes;
        else
            ret += "" + minutes;
        return ret;
    };
    BasePage.prototype.getToday = function () {
        var date = new Date();
        return new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    };
    BasePage.prototype.getTodayString = function () {
        return this.getToday().toISOString();
    };
    BasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-base',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/base/base.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      <img alt="logo" height="40" src="assets/imgs/logo.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  BASE\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/base/base.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], BasePage);
    return BasePage;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_document_viewer__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_opener__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_youtube_video_player__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_push__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_card_card__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cards_cards__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_register_register__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_article_article__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_welcome_welcome__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_filter_popover_filter_popover__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_providers_settings_providers_settings__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_base_base__["a" /* BasePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_29__components_filter_popover_filter_popover__["a" /* FilterPopoverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_base_base__["a" /* BasePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_29__components_filter_popover_filter_popover__["a" /* FilterPopoverComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_opener__["a" /* FileOpener */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_providers_settings_providers_settings__["a" /* ProvidersSettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_push_push__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, toastCtrl, device, pushProvider, storage) {
        var _this = this;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.device = device;
        this.pushProvider = pushProvider;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            var welcome = "true";
            if (welcome && welcome == "true") {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
            }
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__providers_push_push__["a" /* PushProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_8__providers_push_push__["a" /* PushProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationProvider = /** @class */ (function (_super) {
    __extends(NotificationProvider, _super);
    function NotificationProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationProvider.prototype.getApiEndPoint = function () {
        return __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_METHOD_NOTIFICATIONS;
    };
    NotificationProvider.prototype.getByUser = function (pUserId) {
        var _this = this;
        var userId = "-1";
        if (pUserId) {
            userId = pUserId;
        }
        var url = this.getServerUrl() + this.getApiEndPoint()
            + "/user/" + userId;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (items) {
            _this.saveItems(items);
            return items;
        })
            .catch(function (response) {
            console.log(response);
            if (response.status == 0) {
                return Promise.resolve(_this.getItems());
            }
            else {
                return _this.handleError(response);
            }
        });
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NotificationProvider);
    return NotificationProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_constants__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseProvider = /** @class */ (function () {
    function BaseProvider(http) {
        this.http = http;
    }
    BaseProvider.prototype.getApiEndPoint = function () {
        return "";
    };
    BaseProvider.prototype.getServerUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_3__app_app_constants__["a" /* Constants */].API_BASE_URL;
    };
    BaseProvider.prototype.create = function (item) {
        var url = this.getServerUrl() + this.getApiEndPoint();
        return this.http.post(url, item)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError.bind(this));
    };
    BaseProvider.prototype.update = function (item) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/" + item.id;
        return this.http.put(url, item)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError.bind(this));
    };
    BaseProvider.prototype.remove = function (item) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/" + item.id;
        return this.http.delete(url, item)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError.bind(this));
    };
    BaseProvider.prototype.saveElements = function (items, key) {
        localStorage.setItem(key, JSON.stringify(items));
    };
    BaseProvider.prototype.saveItems = function (items) {
        this.saveElements(items, this.getApiEndPoint());
    };
    BaseProvider.prototype.getItems = function () {
        var items = localStorage.getItem(this.getApiEndPoint());
        if (items) {
            return JSON.parse(items);
        }
        else {
            return [];
        }
    };
    BaseProvider.prototype.getAll = function () {
        return this.getAllFilterAndSort({}, { name: 1 });
    };
    BaseProvider.prototype.getAllFilterAndSort = function (pFilters, pSort) {
        return this.getAllFilterAndSortAndPopulates(pFilters, pSort, []);
    };
    BaseProvider.prototype.getAllFilterAndSortAndPopulates = function (pFilters, sort, pPopulates) {
        var _this = this;
        if (!Array.isArray(sort)) {
            sort = [];
        }
        var filters = {};
        if (pFilters)
            filters = pFilters;
        var populates = [];
        if (pPopulates)
            populates = pPopulates;
        var url = this.getServerUrl() + this.getApiEndPoint()
            + "/?_filters=" + encodeURI(JSON.stringify(filters))
            + "&_sort=" + encodeURI(JSON.stringify(sort))
            + "&_populates=" + encodeURI(JSON.stringify(populates));
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (items) {
            _this.saveItems(items);
            return items;
        })
            .catch(function (response) {
            console.log(response);
            if (response.status == 0) {
                return Promise.resolve(_this.getItems());
            }
            else {
                return _this.handleError(response);
            }
        });
        //  .catch(this.handleError.bind(this));
    };
    BaseProvider.prototype.getById = function (id) {
        return this.getByIdWithPopulates(id, []);
    };
    BaseProvider.prototype.getByIdWithPopulates = function (id, populates) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/" + id
            + '?_populates=' + encodeURI(JSON.stringify(populates));
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleError.bind(this));
    };
    BaseProvider.prototype.handleError = function (response) {
        if (!response.status) {
            // alert(JSON.stringify(response));
            return Promise.reject(response);
        }
        else if (response.status == 401) {
            // alert("No se encuentra autorizado.");
            return Promise.reject("No se encuentra autorizado.");
        }
        else if (response.status == 404) {
            return Promise.reject("No se encuentra el registro: " + response.url);
        }
        else if (response.status == 400) {
            console.error('An error occurred', response);
            var error = response.message || response;
            if (response.error)
                if (response.error.errors)
                    if (response.error.errors.length > 0)
                        error = response.error.errors[0];
            if (response.error)
                if (response.error.message)
                    error = response.error.message;
            if (response.error)
                if (response.error.error)
                    if (response.error.error.name)
                        error = response.error.error.name;
            return Promise.reject(error);
        }
        else if (response.status == 500) {
            var body = JSON.parse(response._body);
            return Promise.reject(body.description);
        }
        else {
            console.error('An error occurred', response);
            var message = response.message || response;
            if (response.error)
                if (response.error.errors)
                    if (response.error.errors.length > 0)
                        message = response.error.errors[0].message;
            return Promise.reject(message);
        }
    };
    BaseProvider.SORT_ASC = 1;
    BaseProvider.SORT_DES = -1;
    BaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BaseProvider);
    return BaseProvider;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MPProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MPProvider = /** @class */ (function (_super) {
    __extends(MPProvider, _super);
    function MPProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MPProvider.prototype.getApiEndPoint = function () {
        return __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_METHOD_MP;
    };
    MPProvider.prototype.getSubscriptionInitPoint = function (user) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/subscription/initPoint";
        return this.http.post(url, user)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleError.bind(this));
    };
    MPProvider.prototype.getArticleInitPoint = function (user, article) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/article/initPoint";
        var params = user;
        params.article = article;
        // if(article.price)
        //   params.article.ammount = article.price;
        return this.http.post(url, params)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleError.bind(this));
    };
    MPProvider.prototype.createCustomer = function (user) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/customers";
        console.log(user);
        var params = {
            email: user.user,
            lastName: user.lastName,
            firstName: user.firstName
        };
        //    let params = user;
        // if(article.price)
        //   params.article.ammount = article.price;
        return this.http.post(url, params)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleMPError.bind(this));
    };
    MPProvider.prototype.getCustomerCards = function (user) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/customers/" + user.mpCustomerId + "/cards";
        console.log(user);
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleMPError.bind(this));
    };
    MPProvider.prototype.getCustomerCardToken = function (user, card, securityCode) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/customers/" + user.mpCustomerId + "/cards/" + card.id + "/token";
        console.log(user);
        var params = { securityCode: securityCode };
        return this.http.post(url, params)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleMPError.bind(this));
    };
    MPProvider.prototype.createPayment = function (user, token, amount, description, paymentItemCode, articleId, installments, methodId, externaReference) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/payments";
        console.log(user);
        var params = {
            "paymentToken": {
                "id": token
            },
            "paymentTransaction": {
                "amount": amount,
                "description": description,
                "paymentItemCode": paymentItemCode,
                "installments": installments,
                "methodId": methodId,
                "userId": user.id,
                "articleId": articleId,
                "customerId": user.mpCustomerId,
                "externalReference": externaReference
            }
        };
        return this.http.post(url, params)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleMPError.bind(this));
    };
    MPProvider.prototype.handleMPError = function (response) {
        if (!response.status) {
            // alert(JSON.stringify(response));
            return Promise.reject(response);
        }
        else if (response.status == 401) {
            // alert("No se encuentra autorizado.");
            return Promise.reject("No se encuentra autorizado.");
        }
        else if (response.status == 404) {
            return Promise.reject("No se encuentra el registro: " + response.url);
        }
        else if (response.status == 400) {
            console.error('An error occurred', response);
            var error = "No se puede realizar la accion";
            if (response.error)
                if (response.error.error)
                    if (response.error.error.length > 0) {
                        if (response.error.error[0].code == "101")
                            error = "El usuario ya existe";
                    }
            return Promise.reject(error);
        }
        else if (response.status == 500) {
            var body = JSON.parse(response._body);
            return Promise.reject(body.description);
        }
        else {
            console.error('An error occurred', response);
            var message = response.message || response;
            if (response.error)
                if (response.error.errors)
                    if (response.error.errors.length > 0)
                        message = response.error.errors[0].message;
            return Promise.reject(message);
        }
    };
    MPProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MPProvider);
    return MPProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=mp.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications_notifications__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { InAppBrowser } from '@ionic-native/in-app-browser';
var TabsPage = /** @class */ (function () {
    function TabsPage(
        // private iab: InAppBrowser,
        storage, navCtrl, alertCtrl, app) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.tabHome = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tabNotifications = __WEBPACK_IMPORTED_MODULE_1__notifications_notifications__["a" /* NotificationsPage */];
        this.tabProfile = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__app_app_constants__["a" /* Constants */].storage.user).then(function (user) {
            _this.user = user;
        });
    }
    TabsPage.prototype.showNotifications = function () {
        // this.checkLogin("Para visualizar las notificaciones debe ingresar o registrarse!");
        // this.checkLogin("Advertencia. Esta acción es solo para usuarios registrados. Desas registrarte? Es sin cargo.");
        //const browser = this.iab.create('https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=423762400-a5672344-8909-4e68-923a-ddfbf98acfd5');
        // const browser = this.iab.create('https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=423762400-afe9c2d0-14cc-4b36-a43d-69a34eae8d91');
    };
    TabsPage.prototype.showProfile = function () {
        console.log("Check Login");
        // this.checkLogin("Para ver su perfil debe ingresar o registrarse!");
        // this.checkLogin("Advertencia. Esta acción es solo para usuarios registrados. Desas registrarte? Es sin cargo.");
    };
    TabsPage.prototype.checkLogin = function (msg) {
        if (!this.user) {
            this.Tabs.select(0);
            this.showAccess(msg);
        }
    };
    TabsPage.prototype.showAccess = function (msg) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Acceso Restringido',
            message: msg,
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.goToLogin();
                    }
                }
            ]
        });
        confirm.present();
    };
    TabsPage.prototype.goToLogin = function () {
        console.log("Back to Login");
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('Tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Tabs */])
    ], TabsPage.prototype, "Tabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/tabs/tabs.html"*/'<ion-tabs #Tabs>\n  <ion-tab [root]="tabHome" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tabNotifications" tabTitle="Notificaciones" tabIcon="notifications" (ionSelect)="showNotifications(true)"></ion-tab>\n  <!-- <ion-tab [root]="tabProfile" tabTitle="Mi Perfil" tabIcon="contact" (ionSelect)="showProfile(true)"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_subscription_subscription__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_push_push__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(60);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(storage, navCtrl, navParams, formBuilder, toastCtrl, loadingCtrl, userProvider, subscriptionProvider, pushProvider, device) {
        var _this = _super.call(this, toastCtrl, loadingCtrl, navCtrl) || this;
        _this.storage = storage;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.formBuilder = formBuilder;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.userProvider = userProvider;
        _this.subscriptionProvider = subscriptionProvider;
        _this.pushProvider = pushProvider;
        _this.device = device;
        _this.form = _this.createForm();
        return _this;
    }
    LoginPage.prototype.createForm = function () {
        return this.formBuilder.group({
            user: [''],
            password: ['']
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading("");
        var user = this.form.value;
        this.userProvider.login(user)
            .then(function (u) {
            user = u.user;
            _this.pushProvider.getEnsureByUser(_this.device.uuid)
                .then(function (res) {
                console.log('Get User: ', res);
                if (res.length > 0) {
                    console.log('User ID to remove: ', res[0].id);
                    _this.pushProvider.removeUser(res[0].id)
                        .then(function (res) {
                        console.log('User Removed', res);
                        //this.pushProvider.enablePN(user);
                    })
                        .catch(function (e) { return console.log("Error: ", e); });
                }
                else {
                    //this.pushProvider.enablePN(user);
                }
            });
            return _this.subscriptionProvider.getByUser(user.id);
        })
            .then(function (subscription) {
            if (subscription)
                user.subscription = subscription;
            return _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__app_app_constants__["a" /* Constants */].storage.user, user);
        })
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            _this.showError("No puede ingresar");
        })
            .then(function () {
            _this.hideLoading();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.showRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/brunojular/projects/canadez/app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-grid class="logo-container">\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-8>\n        <img src="assets/imgs/header.png" alt="">\n      </ion-col>\n      <ion-col col-2></ion-col>\n    </ion-row>\n  </ion-grid>\n  <form class="cool-form" (ngSubmit)="login()" [formGroup]="form">\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input type="text" formControlName="user"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Contraseña</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <div class="button-container">\n      <div>\n        <button type="button" ion-button block round color="white" class="default-btn" (click)="login()">Ingresar</button>\n        <button ion-button block round outline color="white" class="default-btn" (click)="showRegister()">\n          Registrate\n        </button>\n      </div>\n    </div>\n    <ion-item text-center no-lines class="transparent" (click)="showHome()">Volver a la Home</ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/brunojular/projects/canadez/app/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_subscription_subscription__["a" /* SubscriptionProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_push_push__["a" /* PushProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_subscription_subscription__["a" /* SubscriptionProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_push_push__["a" /* PushProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_8__base_base__["a" /* BasePage */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProvider = /** @class */ (function (_super) {
    __extends(UserProvider, _super);
    function UserProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProvider.prototype.getApiEndPoint = function () {
        return __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_METHOD_USERS;
    };
    // isLogged(){
    //   var o = localStorage.getItem(Constants.LS_USER);
    //   if(o) return true;
    //   return false;
    // }
    //
    UserProvider.prototype.login = function (user) {
        var url = this.getServerUrl() + this.getApiEndPoint() + "/login";
        return this.http.post(url, user)
            .toPromise()
            .then(function (response) {
            var r = response;
            if (r.errors) {
                return Promise.reject(r.errors[0].message);
            }
            return response;
        })
            .catch(this.handleError.bind(this));
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UserProvider);
    return UserProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_constants__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubscriptionProvider = /** @class */ (function (_super) {
    __extends(SubscriptionProvider, _super);
    function SubscriptionProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionProvider.prototype.getApiEndPoint = function () {
        return __WEBPACK_IMPORTED_MODULE_2__app_app_constants__["a" /* Constants */].API_METHOD_SUBSCRIPTIONS;
    };
    SubscriptionProvider.prototype.getByUser = function (pUserId) {
        var url = this.getServerUrl() + this.getApiEndPoint()
            + "/?_filters=" + encodeURI(JSON.stringify({ user: pUserId }));
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(function (items) {
            var subs;
            if (items.length == 1)
                subs = items[0];
            return subs;
        })
            .catch(this.handleError.bind(this));
    };
    SubscriptionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SubscriptionProvider);
    return SubscriptionProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=subscription.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map