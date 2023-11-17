import { Component, AfterViewInit , ElementRef ,ViewChild} from '@angular/core';
import {
  fadeInFromTop,enterFromLeft,fadeInFromLeft,fadeInFromLeft2
} from '../animations';

import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInFromTop,enterFromLeft,fadeInFromLeft,fadeInFromLeft2
  ],
  
})
export class HomeComponent implements AfterViewInit {
  constructor(){
  }

  ngAfterViewInit() {
  }
}
