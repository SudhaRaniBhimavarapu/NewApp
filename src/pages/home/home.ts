import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageResizer } from '@ionic-native/image-resizer';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FileChooser } from '@ionic-native/file-chooser';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: string;
  image1 : string;

  constructor(public navCtrl: NavController, private camera: Camera, private imageResizer: ImageResizer, private fb: Facebook, private fileChooser: FileChooser, private googlePlus: GooglePlus) {
   
  }

  CaptureImage()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      cameraDirection: 0,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.image = 'data:image/jpeg;base64,' + imageData;
     },
    (err)=>
    {
      alert("image not captured");
    });
  }

  resizeImage() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    })
      .then(imageUri => {
      alert(imageUri),
        this.imageResizer.resize({
          uri: imageUri,
          quality: 60,
          width: 1280,
          height: 1280
        }).then(uri => { this.image1 = uri; alert(uri); })
      })
      .catch(error => alert(error))
  }

  facebook()
  {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => alert('Logged into Facebook!' + res))
      .catch(e => alert('Error logging into Facebook' + e));
    //this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  googleplus()
  {
    this.googlePlus.login({'offline': true})
    .then(res => alert(res))
    .catch(err => alert(err));
  }

  selectFile()
  {
    this.fileChooser.open()
    .then(uri =>alert(uri))
    .catch(e => alert(e));
  }

}


