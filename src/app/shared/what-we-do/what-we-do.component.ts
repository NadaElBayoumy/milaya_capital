import { Component, HostListener } from '@angular/core';
import { enterFromBottom1, enterFromBottom2, enterFromBottom3 } from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MilayaService } from 'src/app/milaya.service';
@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  animations: [enterFromBottom1, enterFromBottom2, enterFromBottom3],
})
export class WhatWeDoComponent {
  isMobile: boolean = false;

  customOptions: OwlOptions = {
    items: 3,
    dots: false,
    navSpeed: 200,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  slides:any = [];

  ngOnInit(): void {
    this.milayaService.getHomePageWhatWeDo().subscribe((what_we_do) => {
      what_we_do.forEach(we_do => {
        this.slides.push({ id: we_do.id, icon: "bi bi-buildings", title: this.milayaService.removeHtmlTagsPipe.transform(we_do?.title?.rendered), description: this.milayaService.removeHtmlTagsPipe.transform(we_do?.content?.rendered) });
      });
    });
  }

  constructor(private milayaService: MilayaService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  //For Animations on Scroll
  animationStates = {
    enterFromBottom1: 'hidden',
    enterFromBottom2: 'hidden',
    enterFromBottom3: 'hidden'
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Threshold values as needed
    const threshold = 100;
    this.animationStates.enterFromBottom1 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromBottom2 = window.scrollY > threshold ? 'visible' : 'hidden';
    this.animationStates.enterFromBottom3 = window.scrollY > threshold ? 'visible' : 'hidden';
  }

}
