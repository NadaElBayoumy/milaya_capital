import { Component,HostListener,Input} from '@angular/core';
import {  enterFromLeft,enterFromTop} from '../../animations';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-business-heights',
  templateUrl: './new-business-heights.component.html',
  styleUrls: ['./new-business-heights.component.scss'],
  animations: [  enterFromLeft,enterFromTop  ],
})
export class NewBusinessHeightsComponent {
  isMobile: boolean = false;
  @Input() newBusinessHeightsContent!: any;
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  
  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromLeft: 'hidden',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
  
    // Threshold values as needed
    const threshold = 1000;

    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromLeft = window.scrollY > threshold ? 'visible' : 'hidden';
  }
}
