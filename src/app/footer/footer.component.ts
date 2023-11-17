import { Component } from '@angular/core';
import {  
  fadeInFromTop,fadeInFromRight,fadeInFromBottom,fadeInFromBottom1,fadeInFromBottom2,fadeInFromBottom3
} from '../animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    fadeInFromTop,fadeInFromRight,fadeInFromBottom,fadeInFromBottom1,fadeInFromBottom2,fadeInFromBottom3
  ]
})
export class FooterComponent {

}
