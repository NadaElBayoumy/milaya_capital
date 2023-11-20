import { Component } from '@angular/core';
import {  fadeInFromLeft ,fadeInFromTop1 , fadeInFromTop2,fadeInFromTop3 , fadeInFromBottom1 ,fadeInFromBottom2, fadeInFromBottom3} from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.scss'],
  animations: [    fadeInFromLeft ,fadeInFromTop1 , fadeInFromTop2,fadeInFromTop3 , fadeInFromBottom1 ,fadeInFromBottom2, fadeInFromBottom3  ]
})
export class WhyChooseComponent {
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
