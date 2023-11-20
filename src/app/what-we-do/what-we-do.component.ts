import { Component } from '@angular/core';
import { fadeInFromBottomToTop1 ,fadeInFromBottomToTop2,fadeInFromBottomToTop3} from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
   animations: [    fadeInFromBottomToTop1 ,fadeInFromBottomToTop2,fadeInFromBottomToTop3  ],
})
export class WhatWeDoComponent {
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
