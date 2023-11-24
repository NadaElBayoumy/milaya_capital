import { Component,HostListener } from '@angular/core';
import {  enterFromLeft ,enterFromTop1 , enterFromTop2,enterFromTop3 , enterFromBottom1 ,enterFromBottom2, enterFromBottom3} from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.scss'],
  animations: [ enterFromLeft ,enterFromTop1 , enterFromTop2,enterFromTop3 , enterFromBottom1 ,enterFromBottom2, enterFromBottom3]
})
export class WhyChooseComponent {
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
  //For Animations on Scroll
  animationStates = {
    enterFromLeft: 'hidden',
    enterFromTop1: 'hidden',
    enterFromTop2: 'hidden',
    enterFromTop3: 'hidden',
    enterFromBottom1: 'hidden',
    enterFromBottom2: 'hidden',
    enterFromBottom3: 'hidden'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 1900;
    // Check the scroll position and update animation states
    this.animationStates.enterFromTop1 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop2 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop3 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromLeft = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromBottom1 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromBottom2 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromBottom3 = window.scrollY > threshold ? 'visible' : 'hidden';
  }
}
