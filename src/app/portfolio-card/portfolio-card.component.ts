import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}
  
  navigateToDetailsPage(id:any) {
    this.router.navigate(['/portfolio-details',{'portfolio-id':'1'}]);
  }
}
