import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

/**
 * Generated class for the CalendarEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendar-event',
  templateUrl: 'calendar-event.html',
})
export class CalendarEventPage {

  event = { title: "", location: "", message: "", startDate: "", endDate: "" };

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarEventPage');
  }

  GetFormattedDate(dateString)
  {
    var date = dateString.split("T");
    var time = date[1].split("Z");
    var dateArr = date[0].split("-");
    //alert(dateArr[0] + " " + dateArr[1] + " " + dateArr[2]);
    var timeArr = time[0].split(":");
    //alert(timeArr[0] + " " + timeArr[1] + " " + timeArr[2]);
    var std = new Date(dateArr[0], dateArr[1]-1, dateArr[2], timeArr[0], timeArr[1], timeArr[2], 0);
    return std;
  }

  GetFormattedDate1(dateString)
  {
    var date = dateString.split("T");
    var time = date[1].split("Z");
    var dateArr = date[0].split("-");
    //alert(dateArr[0] + " " + dateArr[1] + " " + dateArr[2]);
    var timeArr = time[0].split(":");
    //alert(timeArr[0] + " " + timeArr[1] + " " + timeArr[2]);
    var etd = new Date(dateArr[0], dateArr[1]-1, dateArr[2], timeArr[0], timeArr[1], timeArr[2], 0);
    return etd;
  }

  save() {
    if(new Date(this.event.startDate) < new Date(this.event.endDate))
    {
      // alert(this.GetFormattedDate(this.event.startDate));
      // alert(this.GetFormattedDate1(this.event.endDate));
      this.calendar.createEvent(this.event.title, this.event.location, this.event.message, this.GetFormattedDate(this.event.startDate), this.GetFormattedDate1(this.event.endDate)).then(
        (msg) => {
          let alert = this.alertCtrl.create({
            title: 'Success!',
            subTitle: 'Event saved successfully',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();
        },
        (err) => {
          let alert = this.alertCtrl.create({
            title: 'Failed!',
            subTitle: err,
            buttons: ['OK']
          });
          alert.present();
        }
      );
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: 'End Date cannot be less than Start Date',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
