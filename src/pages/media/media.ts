import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { VideoPlayer } from '@ionic-native/video-player';


/**
 * Generated class for the MediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private streamingMedia: StreamingMedia, private videoPlayer: VideoPlayer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

  playVideo()
  {
    let options: StreamingVideoOptions = {
      successCallback: () => { alert('Video played') },
      errorCallback: (e) => { alert('Error streaming') },
      orientation: 'landscape'
    };
    this.streamingMedia.playVideo('http://techslides.com/demos/sample-videos/small.mp4', options);
  }

  playAudio()
  {
    let options: StreamingAudioOptions = {
      successCallback: () => { alert('Audio played') },
      errorCallback: (e) => { alert('Error streaming') },
    };
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
  }

  // resumeAudio()
  // {
  //   this.streamingMedia.resumeAudio();
  // }

  stopAudio()
  {
    this.streamingMedia.stopAudio();
  }

  // pauseAudio()
  // {
  //   this.streamingMedia.pauseAudio();
  // }

  playVideoUsingVP()
  {
    this.videoPlayer.play('http://techslides.com/demos/sample-videos/small.mp4').then(() => {
      alert('video completed');
    }).catch(err => {
      alert(err);
    });
  }
}
