import { Component, AfterViewInit,  HostListener   } from '@angular/core';
import {fadeInFromTop,enterFromLeft0,enterFromLeft,enterFromLeft2} from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInFromTop,enterFromLeft0,enterFromLeft,enterFromLeft2],

})
export class HomeComponent implements AfterViewInit {
  isMobile: boolean = false;
  
  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  ngAfterViewInit() {
    this.animationStates.enterFromTop = 'visible' ;
    this.animationStates.enterFromLeft = 'visible';
  }
  
  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'visible',
    enterFromLeft: 'visible',
    enterFromLeft2: 'hidden',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 50;

    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromLeft = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromLeft2 = window.scrollY > threshold ? 'visible' : 'hidden';
  }
}
