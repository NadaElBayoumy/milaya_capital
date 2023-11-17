import { Component } from '@angular/core';
import { fadeInFromBottomToTop1 ,fadeInFromBottomToTop2,fadeInFromBottomToTop3
} from '../animations';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
   animations: [
    fadeInFromBottomToTop1 ,fadeInFromBottomToTop2,fadeInFromBottomToTop3
  ],
})
export class WhatWeDoComponent {

}
