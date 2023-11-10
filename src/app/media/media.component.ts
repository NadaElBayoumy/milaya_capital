import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  @Input() mediaType!: string;
  @Input() mediaURL!: string;
  name = 'Video events';
  // videoSource =
  // 'https://uat.cuju.io/static/media/cd0ea906-3e62-4635-b300-8614664a5779/5/a77fb793-7b0d-4970-9aed-20d7505ff6b7.mov?Expires=1631793339408&Key-Pair-Id=K33MJ8S94YSOG&Signature=w8hG-io5CIjmAfw7xGnk3RuSVVS6XKIUfVIblDfdpSQn~XN7EjGEWz-yk48aMUM26nV4Axj~UIeZn6Yn1x-gFO1Qil-kVBfhaEpJm3POj2luLoBjJBlX4ZsurQSjF3l8W4jEqbWmU5rWkoN5pTnorPCjh0dkVk6fw7nuQIRbctNGxfkzMrx~Bp-tqwnvrCAlNsgQh4EIOtfULSkXexuQP1BUsi25r~p1ZSkH8xHtn~22qWpeNbzqftoXbjknyzLU0aJ8Ao7SrSbLIpo1aGUdDH7x4TMUWNNkA8ng61lRLzxRW88bSkS8fRu~AHpvv~ZIQuwm18eG-xFraUyJT6-o1A__';
  // videoSource = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
  @ViewChild('videoPlayer') videoplayer: any;
  // @ViewChild('videoPlayBtn') videoPlayBtn:any;
  startedPlay: boolean = false;
  show: boolean = false;

  pauseVideo(videoplayer: any) {
    videoplayer.nativeElement.play();
    // this.startedPlay = true;
    // if(this.startedPlay == true)
    // {
    setTimeout(() => {
      videoplayer.nativeElement.pause();
      if (videoplayer.nativeElement.paused) {
        this.show = !this.show;
      }
    }, 3000);
    // }
  }

  playVideo() {
    if (!this.videoplayer ){
      return;
    }
    this.videoplayer.nativeElement.play();
    
    this.startedPlay = true;
    // setTimeout(() => {
    //   this.videoplayer.nativeElement.pause();
    //   if (this.videoplayer.nativeElement.paused) {
    //     this.show = !this.show;
    //   }
    // }, 5000);
  }

  closebutton(videoplayer: any) {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }
}
