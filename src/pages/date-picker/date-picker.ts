import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { SMS, SmsOptions, SmsOptionsAndroid } from '@ionic-native/sms';
import { Shake } from '@ionic-native/shake';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

/**
 * Generated class for the DatePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-date-picker',
  templateUrl: 'date-picker.html',
})
export class DatePickerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, private qrScanner: QRScanner, private sms: SMS, private shake: Shake, private localNotification: PhonegapLocalNotification, private localNotifications: LocalNotifications) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePickerPage');
  }

  DatePicker()
  {
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => alert(date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  Scanner()
  {
  this.qrScanner.prepare().then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted
      alert("authorized");
       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         alert(text);
         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
         this.navCtrl.pop();
       });

       this.qrScanner.resumePreview();

       // show camera preview
       this.qrScanner.show().then((data : QRScannerStatus)=> { 
        console.log('datashowing', data.showing);
        alert(data.showing);
        },err => {
        alert(err);
      });
     } 
  })
  .catch((e: any) => alert('Error is ' + e));
  }

  sendSMS()
  {
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
          intent: 'INTENT'  // send SMS with the native android SMS messaging
      }
    };
    this.sms.send('9177420927', 'Hello!!!');
  }

  sendNotification()
  {
    this.localNotification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Create the notification
          this.localNotification.create('My Title', {
            tag: 'message',
            body: 'Notification Plugin installed',
            icon: 'assets/icon/favicon.ico'
          });
        }
    });    
  }
 
  //android Api key: AIzaSyCnuCw51F9-Woqzyefr5bFLEWCM3D0Fpw0
  //ios Api key: AIzaSyAdZH0o8ymo82Iow1galwTS9E9qW8t88ZE
  //facebook API key: 1507200619396584->app_id, NewApp->app_name
  //ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="1507200619396584" --variable APP_NAME="NewApp"
  //google plus client ID: 959470844904-bq8rh6tomv4n121jt1ouoemg0heju1ed.apps.googleusercontent.com
  //google plus reverse client ID: com.googleusercontent.apps.959470844904-bq8rh6tomv4n121jt1ouoemg0heju1ed
  //ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.959470844904-bq8rh6tomv4n121jt1ouoemg0heju1ed

  Notification1()
  {
    this.localNotifications.schedule({
      id: 1,
      title: 'Local Single LocalNotification Example',
      text: 'Single ILocalNotification',
      
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      // data: { secret: key }
    });
    console.log('note');
  }

  Notification2()
  {
    this.localNotifications.schedule([{
      id: 1,
      title: 'Local Multiple LocalNotification Example1',
      text: 'Multi ILocalNotification 1',
      // sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
      // data: { secret:key }
     },{
      id: 2,
      title: 'Local Multiple LocalNotification Example2',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
   }]);
  }

  Notification3()
  {
    this.localNotifications.schedule({
      title: 'Delayed LocalNotification Example',
      text: 'Delayed ILocalNotification',
      at: new Date(new Date().getTime() + 3600),
      led: 'FF0000',
      sound: null
   });
  }
}
