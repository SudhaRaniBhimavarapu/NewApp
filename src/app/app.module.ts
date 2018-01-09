import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactsPage } from '../pages/contacts/contacts';
import { DatePickerPage } from '../pages/date-picker/date-picker';
import { MapsPage } from '../pages/maps/maps';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { BarCodeScannerPage } from '../pages/bar-code-scanner/bar-code-scanner';
import { AppBrowserPage } from '../pages/app-browser/app-browser';
import { MediaPage } from '../pages/media/media';
import { CalendarPage } from '../pages/calendar/calendar';
import { CalendarEventPage } from '../pages/calendar-event/calendar-event';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Contacts } from '@ionic-native/contacts';
import { DatePicker } from '@ionic-native/date-picker';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { SMS } from '@ionic-native/sms';
import { Shake } from '@ionic-native/shake';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { EmailComposer } from '@ionic-native/email-composer';
import { ImageResizer } from '@ionic-native/image-resizer';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Facebook } from '@ionic-native/facebook';
import { Calendar } from '@ionic-native/calendar';
import { VideoPlayer } from '@ionic-native/video-player';
import { FileChooser } from '@ionic-native/file-chooser';
import { GooglePlus } from '@ionic-native/google-plus';

import { CustomFooterComponent } from '../components/custom-footer/custom-footer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    DatePickerPage,
    MapsPage,
    GeolocationPage,
    BarCodeScannerPage,
    AppBrowserPage,
    CustomFooterComponent,
    MediaPage,
    CalendarPage,
    CalendarEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    DatePickerPage,
    MapsPage,
    GeolocationPage,
    BarCodeScannerPage,
    AppBrowserPage,
    MediaPage,
    CalendarPage,
    CalendarEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Contacts,
    DatePicker,
    QRScanner,
    SMS, 
    Shake,
    PhonegapLocalNotification,
    GoogleMaps,
    Geolocation,
    BarcodeScanner,
    InAppBrowser,
    StreamingMedia,
    EmailComposer,
    ImageResizer,
    LocalNotifications,
    Facebook,
    Calendar,
    VideoPlayer,
    FileChooser,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
