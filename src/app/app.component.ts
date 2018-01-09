import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Contacts', component: ContactsPage },
      { title: 'DatePicker', component: DatePickerPage },
      { title: 'Maps', component: MapsPage },
      { title: 'GeoLocation', component: GeolocationPage },
      { title: 'Bar Code Scanner', component: BarCodeScannerPage },
      { title: 'App Browser', component: AppBrowserPage },
      { title: 'Media', component: MediaPage },
      { title: 'Calendar', component: CalendarPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
