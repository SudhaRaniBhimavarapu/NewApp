import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

import { CustomFooterComponent } from '../../components/custom-footer/custom-footer';

/**
 * Generated class for the AppBrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var inappRef;

@Component({
  selector: 'page-app-browser',
  templateUrl: 'app-browser.html',
})
export class AppBrowserPage {

  url : string = 'https://ionicframework.com/docs/cli/cordova/emulate/';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppBrowserPage');
  }

  // loadStartCallBack() {
  //   alert("loading please wait ...");
  // }

  redirectLink()
  {
    var inappRef;
    const browser = this.iab.create(this.url, "_blank","location=yes,hidden=yes");
    //inappRef = cordova.InAppBrowser.open(this.url);
    //inappRef.addEventListener('loadstart', this.loadStartCallBack);
    // browser.executeScript(...);
    // browser.insertCSS(...);
    // browser.close();
  }

  ComposeEmail()
  {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'sudhab@pllcsoftwaresolutions.com',
       cc: 'sudhab@pllcsoftwaresolutions.com',
       bcc: ['sudhab@pllcsoftwaresolutions.com'],
       attachments: [
         'file://img/logo.png',
         'res://icon.png',
         'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
         'file://README.pdf'
       ],
       subject: 'Cordova Icons',
       body: 'How are you? ',
       isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
