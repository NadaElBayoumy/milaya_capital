import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fadeInFromTop, enterFromLeft, fadeInFromLeft, fadeInFromLeft2 , fadeInFromBottomToTop1} from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInFromTop, enterFromLeft, fadeInFromLeft, fadeInFromLeft2, fadeInFromBottomToTop1],

})
export class HomeComponent implements AfterViewInit {
  isMobile: boolean = false;
  
  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  ngAfterViewInit() {
  }
}
