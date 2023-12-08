import { Component, Input, ViewChild, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';
import { enterFromTop } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  animations: [enterFromTop]
})
export class MediaComponent implements OnInit {
  @Input() mediaType!: string;
  name = 'Video events';
  @ViewChild('videoPlayer') videoplayer: any;
  startedPlay: boolean = false;
  show: boolean = false;
  isMobile: boolean = false;
  threshold = 2500;
  mediaURL!: any;

  constructor(private milayaService: MilayaService, private router: Router, private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef) {
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

  ngOnInit(): void {
    this.mediaURL = "https://milayacapital.ae/wp-content/uploads/2023/05/Milaya-Web-Video.mp4";
    this.milayaService.getFeaturedImageUrl(this.milayaService.main_video_id).subscribe((video: any) => {
      this.mediaURL = this.milayaService.removeHtmlTagsPipe.transform(video?.guid?.rendered);
      this.cdr.detectChanges();
    });
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
    if (!this.videoplayer || !this.videoplayer.nativeElement) {
      return;
    }
    var playPromise = this.videoplayer.nativeElement.play();
    if (playPromise !== undefined) {
      playPromise.then((_: any) => {
        this.startedPlay = true;
        this.videoplayer.controls = true;
      })
        .catch((error: any) => {
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
