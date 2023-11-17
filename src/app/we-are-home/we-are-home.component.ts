import { Component } from '@angular/core';
import { fadeInFromLeft,fadeInFromTop,enterFromBottomLeftToTopRight3,enterFromBottomLeftToTopRight2,enterFromBottomLeftToTopRight1,fadeInFromBottom,fadeInFromRight
} from '../animations';

@Component({
  selector: 'app-we-are-home',
  templateUrl: './we-are-home.component.html',
  styleUrls: ['./we-are-home.component.scss'],
  animations: [
    fadeInFromLeft,fadeInFromTop,fadeInFromTop,enterFromBottomLeftToTopRight3,enterFromBottomLeftToTopRight2,enterFromBottomLeftToTopRight1,fadeInFromBottom,fadeInFromRight
  ],
})
export class WeAreHomeComponent {

}
