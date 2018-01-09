import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarCodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bar-code-scanner',
  templateUrl: 'bar-code-scanner.html',
})
export class BarCodeScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarCodeScannerPage');
  }

  barCodeScanner()
  {
    this.barcodeScanner.scan().then((barcodeData) => {
      alert(barcodeData.text);
     }, (err) => {
         alert("No bar code data found");
     });
  }

}
