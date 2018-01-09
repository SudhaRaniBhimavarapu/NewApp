import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  text : boolean;
  content: string;
  markers: Array<any> = [];

  @ViewChild('map') mapElement : ElementRef;
  map : any;
  marker : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
    this.loadMap();
  }

  findMyLocation()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      alert("Latitude: " + resp.coords.latitude + "\n " + 
            "Longitude: " + resp.coords.longitude + "\n " +
            "Accuracy: " + resp.coords.accuracy);
     }).catch((error) => {
       alert('Error getting location' + error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      alert("Latitude: " + data.coords.latitude + "\n " + "Longitude: " + data.coords.longitude);
     });
  }

  loadMap()
  {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center : latLng,
        zoom : 15,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, (err) => { console.log(err);
    });
  }

  addMarker()
  {
    this.text = true;
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    this.markers.push(this.marker);
   // let content = "<h3>PLLC Software Solutions</h3><h5>Srungeri Colony</h5>";
    // this.addInfoWindow(marker, content);
  }

  AddInformation()
  {
    this.addInfoWindow(this.marker, this.content);
    this.text = false;
  }

  addInfoWindow(marker, content)
  {
    let InfoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      InfoWindow.open(this.map, marker);
    });
  }

  RemoveMarker()
  {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }   
}
