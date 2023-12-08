import { Component, AfterViewInit, Input } from '@angular/core';
import { fadeInFromLeft, fadeInFromTop, enterFromBottomLeftToTopRight3, enterFromBottomLeftToTopRight2, enterFromBottomLeftToTopRight1, fadeInFromBottom, fadeInFromRight } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-we-are-home',
  templateUrl: './we-are-home.component.html',
  styleUrls: ['./we-are-home.component.scss'],
  animations: [fadeInFromLeft, fadeInFromTop, fadeInFromTop, enterFromBottomLeftToTopRight3, enterFromBottomLeftToTopRight2, enterFromBottomLeftToTopRight1, fadeInFromBottom, fadeInFromRight
  ],
})
export class WeAreHomeComponent implements AfterViewInit {
  isMobile: boolean = false;
  @Input() ourWorkContent!: any;
  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngAfterViewInit() {
    const container = document.querySelector('.flex-container');
  }



}
