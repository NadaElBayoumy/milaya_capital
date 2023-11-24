import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { slideFromLeft, slideFromRight} from '../../animations';
@Component({
  selector: 'app-portfolio-vertical-card',
  templateUrl: './portfolio-vertical-card.component.html',
  styleUrls: ['./portfolio-vertical-card.component.scss'],  
  animations: [    slideFromLeft ,slideFromRight  ],
})
export class PortfolioVerticalCardComponent {
  @Input() imageWay!: string;

  
  navigateToDetailsPage(id:any) {
    this.router.navigate(['/portfolio-details',{'portfolio-id':'1'}]);
  }

  isMobile: boolean = false;
  
  constructor(private router: Router, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
