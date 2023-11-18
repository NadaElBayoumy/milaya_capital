import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fadeInFromTop, enterFromLeft, fadeInFromLeft, fadeInFromLeft2 , fadeInFromBottomToTop1} from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInFromTop, enterFromLeft, fadeInFromLeft, fadeInFromLeft2, fadeInFromBottomToTop1],

})
export class HomeComponent implements AfterViewInit {
  constructor() {
  }

  ngAfterViewInit() {
  }
}
