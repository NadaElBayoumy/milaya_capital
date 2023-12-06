import { Component, Input } from '@angular/core';
import { enterFromLeft0,fadeInFromTop2,fadeInFromRight,slideInFromRight} from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-we-are-card',
  templateUrl: './we-are-card.component.html',
  styleUrls: ['./we-are-card.component.scss'],
  animations: [    enterFromLeft0,fadeInFromTop2,fadeInFromRight,slideInFromRight  ],
})
export class WeAreCardComponent {
  isMobile: boolean = false;
  @Input() leadersInManagementContent:any;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
