import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CodePage } from '../pages/code/code';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Chapter1Page } from '../pages/chapter1/chapter1';
import { Chapter2Page } from '../pages/chapter2/chapter2';
import { Chapter3Page } from '../pages/chapter3/chapter3';
import { Chapter4Page } from '../pages/chapter4/chapter4';
import { Chapter5Page } from '../pages/chapter5/chapter5';
import { Chapter6Page } from '../pages/chapter6/chapter6';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CodePage,
    ContactPage,
    HomePage,
    TabsPage,
       Chapter1Page,
       Chapter2Page,
       Chapter3Page,
       Chapter4Page,
       Chapter5Page,
       Chapter6Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   MyApp,
    CodePage,
    ContactPage,
    HomePage,
    TabsPage,
       Chapter1Page,
       Chapter2Page,
       Chapter3Page,
       Chapter4Page,
       Chapter5Page,
       Chapter6Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
