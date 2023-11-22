import { Component, AfterViewInit, ElementRef, ViewChild,HostListener  } from '@angular/core';
import { fadeInFromTop, enterFromLeft, fadeInFromLeft, fadeInFromLeft2 , fadeInFromBottomToTop1,scrollAnimation} from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInFromTop, enterFromLeft, fadeInFromLeft, fadeInFromLeft2, fadeInFromBottomToTop1,scrollAnimation],

})
export class HomeComponent implements AfterViewInit {
  animationState = 'start';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect the scroll position and trigger animation accordingly
    if (window.scrollY > 200) {
      this.animationState = 'end';
    } else {
      this.animationState = 'start';
    }
  }

  
  isMobile: boolean = false;
  
  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  ngAfterViewInit() {
  }
}
