import { Component , Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-what-we-do-card',
  templateUrl: './what-we-do-card.component.html',
  styleUrls: ['./what-we-do-card.component.scss']
})
export class WhatWeDoCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() alignment!: string;
  @Input() backgroundImage!: string;
  
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
