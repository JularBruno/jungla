import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Device } from '@ionic-native/device';
import { Push } from '@ionic-native/push';

import { PaymentPage } from '../pages/payment/payment';
import { CardPage } from '../pages/card/card';
import { CardsPage } from '../pages/cards/cards';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ArticlePage } from '../pages/article/article';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BasePage } from '../pages/base/base';
import { WelcomePage } from '../pages/welcome/welcome';
import { FilterPopoverComponent } from '../components/filter-popover/filter-popover';
import { ProvidersSettingsProvider } from '../providers/providers-settings/providers-settings';

@NgModule({
  declarations: [
    MyApp,
    PaymentPage,
    CardPage,
    CardsPage,
    NotificationsPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ArticlePage,
    BasePage,
    WelcomePage,
    FilterPopoverComponent
  ],
  imports: [
    HttpClientModule,
    IonicStorageModule.forRoot(),
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaymentPage,
    CardPage,
    CardsPage,
    NotificationsPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    ArticlePage,
    BasePage,
    WelcomePage,
    FilterPopoverComponent
  ],
  providers: [
    InAppBrowser,
    YoutubeVideoPlayer,
    StatusBar,
    SplashScreen,
    Device,
    Push,
    DocumentViewer,
    File,
    FileTransfer,
    FileOpener,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvidersSettingsProvider
  ]
})
export class AppModule {}
