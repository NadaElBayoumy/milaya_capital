import { Component } from '@angular/core';
import { slideFromTop,fadeInFromRight,fadeInFromTop1,fadeInFromLeft} from '../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-portfolio-detail-card',
  templateUrl: './portfolio-detail-card.component.html',
  styleUrls: ['./portfolio-detail-card.component.scss'],
  animations: [    slideFromTop,fadeInFromRight,fadeInFromTop1 ,fadeInFromLeft ],
})
export class PortfolioDetailCardComponent {

  isMobile: boolean = false;
  
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
