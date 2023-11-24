import { Component,HostListener } from '@angular/core';
import { enterFromTop, enterFromTop1, enterFromTop2 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [enterFromTop, enterFromTop1, enterFromTop2]
})

export class AboutComponent {
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromTop1: 'hidden',
    enterFromTop2: 'hidden'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
        // console.log(window.scrollY)
    // Threshold values as needed
    const threshold = 100;

    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop1 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop2 = window.scrollY > threshold ? 'visible' : 'hidden';
  }
}
