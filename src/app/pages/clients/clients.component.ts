import { Component, OnInit, HostListener } from '@angular/core';
import { enterFromTop, enterFromTop1, enterFromLeft, enterFromRight } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [enterFromTop, enterFromTop1, enterFromLeft, enterFromRight]
})

export class ClientsComponent implements OnInit {
  ngOnInit(): void {

  }
  isMobile: boolean = false;
  // Threshold values as needed
  threshold = 700;

  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });

    if (this.router?.url == "/about") {
      this.threshold = 700;
    }
    else if (this.router?.url == "/home") {
      this.threshold = 2500;
    }
    else if (this.router?.url == "/mission") {
      this.threshold = 0;
    }
  }

  //For Animations on Scroll
  animationStates = {
    enterFromTop: 'hidden',
    enterFromTop1: 'hidden',
    enterFromLeft: 'hidden',
    enterFromRight: 'hidden'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.scrollY)
    // if(this.router?.url == "/mission"){
    //   return;
    // }
    // Check the scroll position and update animation states
    this.animationStates.enterFromTop = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromTop1 = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromLeft = window.scrollY > this.threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromRight = window.scrollY > this.threshold ? 'visible' : 'hidden';
  }
}

