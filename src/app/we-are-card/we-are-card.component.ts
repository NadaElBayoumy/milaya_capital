import { Component } from '@angular/core';
import { enterFromLeft,fadeInFromTop2,fadeInFromRight,slideInFromRight
} from '../animations';

@Component({
  selector: 'app-we-are-card',
  templateUrl: './we-are-card.component.html',
  styleUrls: ['./we-are-card.component.scss'],animations: [
    enterFromLeft,fadeInFromTop2,fadeInFromRight,slideInFromRight
  ],
})
export class WeAreCardComponent {

}
