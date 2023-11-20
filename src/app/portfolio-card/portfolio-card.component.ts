import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { slideFromLeft, slideFromRight
} from '../animations';
@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],  
  animations: [    slideFromLeft ,slideFromRight  ],
})
export class PortfolioCardComponent {
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
