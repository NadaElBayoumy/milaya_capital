import { Component} from '@angular/core';
import {   slideLeftToRight,fadeInFromTop} from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-business-heights',
  templateUrl: './new-business-heights.component.html',
  styleUrls: ['./new-business-heights.component.scss'],
  animations: [    slideLeftToRight,fadeInFromTop  ],
})
export class NewBusinessHeightsComponent {
  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
