import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, AlertController, App, Platform, LoadingController } from 'ionic-angular';
import { Constants } from '../../app/app.constants';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Storage } from '@ionic/storage';
import { MPProvider } from '../../providers/mp/mp';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

import { UserProvider } from '../../providers/user/user';
import { ArticleProvider } from '../../providers/article/article';
import { CardsPage } from '../cards/cards';

// PDF
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener/';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
  providers: [MPProvider, ArticleProvider, UserProvider]
})
export class ArticlePage {

  @ViewChild(Content) content: Content;
  
  item: any = {
    id: 1,
    title: "Este es el título del artículo",
    category: "PRODUCTO",
    image: "assets/imgs/peinado.jpg",
    liked: false,
    locked: true,
    content: "<p>Fap jean shorts heirloom post-ironic squid viral Godard DIY Blue Bottle food truck +1 master cleanse Cosby sweater cardigan trust fund YOLO craft beer hoodie polaroid messenger bag banh mi you probably haven't heard of them Carles Kickstarter keytar Tonx hashtag selfies cliche drinking vinegar cred deep v Tumblr seitan wolf sustainable vegan quinoa beard single- origin </p><p>Coffee chambray kogi chillwave direct trade gastropub flannel roof party 3 wolf moon hella small batch mixtape scenester McSweeney's biodiesel brunch try-hard Helvetica Pitchfork raw denim stumptown kitsch photo booth selvage wayfarers bicycle rights irony yr four loko Marfa Schlitz dreamcatcher fingerstache blog twee disrupt lo-fi Intelligentsia </p><p>Leggings Brooklyn Portland banjo put a bird on it Etsy American Apparel tofu mumblecore Wes Anderson XOXO salvia fashion axe locavore art party forage artisan VHS retro letterpress pour - over Vice 8 - bit normcore semiotics Truffaut sriracha vinyl street art chia ugh narwhal next level 90's Austin meggings keffiyeh gluten-free farm-to-table occupy organic whatever plaid tattooed paleo pug church - key butcher cray bespoke PBR & B Shoreditch </p><p>Lomo shabby chic gentrify freegan mlkshk flexitarian PBR kale chips ethical Thundercats pop - up Banksy ennui iPhone Williamsburg pork belly mustache Echo Park skateboard slow - carb crucifix swag tousled Neutra Odd Future bitters fixie pickled High Life actually umami cornhole before they sold out asymmetrical Pinterest Bushwick </p>"
  }
  access: any;
  user: any;

  article:any;
  category = Constants.CATEGORY;
  likedByUser: boolean = false;
  amountOfLikes = 0;
  loading: any;



  constructor(
    private youtube: YoutubeVideoPlayer,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public app: App,
    public mpProvider: MPProvider,
    public iab: InAppBrowser,
    public userProvider: UserProvider,
    public articleProvider: ArticleProvider,
    private platform: Platform,
    private document: DocumentViewer,
    private file: File,
    private ft: FileTransfer,
    private fileOpener: FileOpener,
    private loadingCtrl: LoadingController

  ) {
    this.article = this.navParams.get('article');
    console.log(this.article);
    
    this.access = this.navParams.get('access');
    
    ///
    // this.article.images = [];
    // if(this.article.images.length <= 0) this.article.images.push(this.article.image);
    this.storage.get(Constants.storage.user).then((val) => {
      this.user = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

  ionViewDidEnter(){
    console.log("ionViewWillEnter")

    // jungla
    this.content.scrollToBottom(0);
    // isLiked
    if (this.user) {
      for (let i of this.article.like) {
      console.log("i" + i)
      console.log("this.user.id" + this.user.id)

      if (i.id == this.user.id) {
        this.likedByUser = true;
        console.log(this.likedByUser);
      }
    }
    }


  }

  getBackground(image) {
    console.log(image);
    let bg;
    // bg = 'linear-gradient(rgba(244, 244, 244, 0), rgba(244, 244, 244, 0.5) 70%, rgba(244, 244, 244, 1) 100%), url(' + Constants.FILES_BASE_URL + "/" + image + ')';
    bg = 'url('  + image +  ')';
    return bg;
  }

  ///// JUNGLA

  openVideo(){
    this.youtube.openVideo(this.article.video);
  }
  goProfile(){
    this.app.getRootNav().setRoot(RegisterPage);
  }
  openMap(){
    this.youtube.openVideo(this.article.video);
  }

  /////
  
  confirmPayment() {
    let alert = this.alertCtrl.create({
      title: 'Importante',
      subTitle: 'La acreditación inmediata de su pago es solo con tarjeta de crédito.',
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
            this.payArticle();
          }
        }]
    });
    alert.present();
  }

  payArticle() {
    if (this.user && (this.user != "-1")) {
      if(this.user.mpCustomerId && this.user.mpCustomerId !='')
        this.loadCustomerCards();
      else
        this.createCustomer();
    } else {
      this.app.getRootNav().setRoot(LoginPage);
    }
  }


  createCustomer(){

    this.showLoading();

    this.mpProvider.createCustomer(this.user)
      .then((res:any) => {
        console.log(res);
        this.user.mpCustomerId = res.id;
        this.userProvider.update(this.user)
          .then((res: any) => {
            console.log(res);
            this.storage.set(Constants.storage.user, this.user);
            //this.showSuccess("Se actualizó con éxito");
            this.loadCustomerCards();
          })
          .catch(error => {
            alert("No se ha podido actualizar");
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

  loadCustomerCards(){
    const paymentItem = {
      code:"ARTICLE",
      description:this.article.title,
      articleId:this.article.id
    };
    this.navCtrl.push(CardsPage,{paymentItem});
  }

  payArticleOld() {
    if (this.user && (this.user != "-1")) {
      let self = this;

      this.mpProvider.getArticleInitPoint(this.user, this.article)
        .then((res: any) => {
          console.log(res.initPoint);
          const browser = this.iab.create(res.initPoint);
          browser.on('exit').subscribe(event => {
            setTimeout(() => {
              self.navCtrl.pop();
            }, 1500);
          });
        })
        .catch(error => {
          alert("No se puede obtener el link de pago");
        })
    } else {
      this.app.getRootNav().setRoot(LoginPage);
    }
  }

  // -----------

  //
  like() {
    this.likedByUser = true;

    let articleItem = {
      id: this.article.id,
      like: this.article.like
    }

    articleItem.like.push(this.user)

    this.articleProvider.update(articleItem)
      .then(articleU => {
        console.log(articleU)

        // this.countLikes()

      }).catch(error => {
        console.log("error1: " + error);
      })
  }

  //
  unLike(){
    console.log("unlike");
    for (let i of this.article.like) {

      if (i.id == this.user.id) {
        console.log(this.likedByUser);

        let index = this.article.like.indexOf(i);

        let articleItem = {
          id: this.article.id,
          like: this.article.like
        }

        articleItem.like.splice(index, 1);

        this.articleProvider.update(articleItem)
          .then(articleU => {
            console.log(articleU)
            this.likedByUser = false;
            this.countLikes()

          }).catch(error => {
            alert("error: " + error);
          })
      }
    }
  }

  //
  countLikes(){
    this.articleProvider.getById(this.article.id)
      .then(articleG => {
        console.log("articleG" + articleG)
        this.amountOfLikes = articleG['like'].length
      })
  }

  openFile() {
    let downloadUrl = Constants.FILES_BASE_URL + '/' + this.article.pdf;
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();
    this.showLoading("Descargando documento");

    transfer.download(downloadUrl, path + this.article.title)
      .then(entry => {
        let url = entry.toURL();

        if (this.platform.is('ios')) {
          this.document.viewDocument(url, 'application/pdf', {});
        } else {
          this.fileOpener.open(url, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e))
            .then(() => this.hideLoading())
        }
      })
      .catch(e => console.log('Error opening file', e))
      .then(() => console.log('File finish final'));
  }
  showLoading(content?) {
    console.log("Cargador...")
    if (!content) content = '';
    this.loading = this.loadingCtrl.create({
      content: content
    });
      this.loading.present();
  }
  hideLoading() {
    console.log("Ocultar cargador...")
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  seeMap() {
    const browser = this.iab.create("https://www.google.com/maps/place/Centro+Cultural+Recoleta/@-34.5865384,-58.3940532,18z/data=!4m5!3m4!1s0x95bccaa24c8efcad:0x4a52ca8190703ddc!8m2!3d-34.58647!4d-58.3917519");
  }
  seeInsta() {
    console.log(' see insta')
    const browser = this.iab.create('https://www.instagram.com/jungla2020/')
  }
  seeVideo() {
    console.log(' see insta')
    const browser = this.iab.create('https://www.instagram.com/p/B6B1jGFA9VD/')
  }
}
