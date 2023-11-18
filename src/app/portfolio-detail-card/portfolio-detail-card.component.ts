import { Component } from '@angular/core';
import { slideFromTop,fadeInFromRight,fadeInFromTop1} from '../animations';
@Component({
  selector: 'app-portfolio-detail-card',
  templateUrl: './portfolio-detail-card.component.html',
  styleUrls: ['./portfolio-detail-card.component.scss'],
  animations: [    slideFromTop,fadeInFromRight,fadeInFromTop1  ],
})
export class PortfolioDetailCardComponent {

}
