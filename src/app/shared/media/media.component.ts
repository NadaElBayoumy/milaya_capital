import { Component, Input, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { enterFromTop } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [enterFromTop]
})
export class MediaComponent implements AfterViewInit {
  @Input() mediaType!: string;
  @Input() mediaURL!: string;
  name = 'Video events';
  @ViewChild('videoPlayer') videoplayer: any;
  startedPlay: boolean = false;
  show: boolean = false;
  isMobile: boolean = false;
  // Threshold values as needed
  threshold = 2500;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

    if (this.router?.url == "/home") {
      this.threshold = 2500;
    }
    else if (this.router?.url == "/about") {
      this.threshold = 1000;
    }
    else if (this.router?.url == "/mission") {
      this.threshold = 110;
    }
  }

  ngAfterViewInit(): void {

  }

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
    console.log("in play video")
    if (!this.videoplayer || !this.videoplayer.nativeElement) {
      console.log("not native element")
      return;
    }
    var playPromise = this.videoplayer.nativeElement.play();
    if (playPromise !== undefined) {
      console.log("play promise", playPromise)
      playPromise.then((_: any) => {
        this.startedPlay = true;
        this.videoplayer.controls = true;
      })
        .catch((error: any) => {
          console.log(error)
        });
    }
  }

  closebutton(videoplayer: any) {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > this.threshold ? 'visible' : 'hidden';
  }
}
