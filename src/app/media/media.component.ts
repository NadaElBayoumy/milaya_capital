import { Component, Input, ViewChild } from '@angular/core';
import { fadeInFromBottom } from '../animations';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [fadeInFromBottom]
})
export class MediaComponent {
  @Input() mediaType!: string;
  @Input() mediaURL!: string;
  name = 'Video events';
  @ViewChild('videoPlayer') videoplayer: any;
  startedPlay: boolean = false;
  show: boolean = false;


  
  pauseVideo(videoplayer: any) {
    if (!videoplayer || !videoplayer.nativeElement) {
      return;
    }
    videoplayer.nativeElement.play();
    setTimeout(() => {
      videoplayer.nativeElement.pause();
      if (videoplayer.nativeElement.paused) {
        this.show = !this.show;
      }
    }, 3000);
  }

  playVideo() {
    if (!this.videoplayer || !this.videoplayer.nativeElement) {
      return;
    }
    this.videoplayer.nativeElement.play();
    this.startedPlay = true;
    this.videoplayer.controls = true;
  }

  closebutton(videoplayer: any) {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }
}
