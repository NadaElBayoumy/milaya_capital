import { Component, OnInit } from '@angular/core';
import {
  fadeInFromBottomTy20, fadeInFromBottom, fadeInFromLeft, fadeInFromTop, enterFromBottomLeftToTopRight333, enterFromBottomLeftToTopRight1, enterFromBottomLeftToTopRight2
  , enterFromBottomLeftToTopRight3, fadeInFromRight, fadeInFromTop1, slideInFromLeft, slideInFromRight, slideLeftToRight, slideFromTop1, slideFromTop2, slideFromTop3
  , slideFromTop4, slideFromRight, slideFromLeft, fadeInFromBottom1, fadeInFromBottom2, fadeInFromBottom3, fadeInFromBottom4, fadeInFromBottom5, enterFromLeft
  , fadeInFromLeft2,fadeInFromBottomToTop1,fadeInFromBottomToTop2,fadeInFromBottomToTop3 ,fadeInFromTop2,fadeInFromTop3
} from '../animations';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    fadeInFromBottomTy20, fadeInFromBottom, fadeInFromLeft, fadeInFromTop, enterFromBottomLeftToTopRight333, enterFromBottomLeftToTopRight1, enterFromBottomLeftToTopRight2
    , enterFromBottomLeftToTopRight3, fadeInFromRight, fadeInFromTop1, slideInFromLeft, slideInFromRight, slideLeftToRight, slideFromTop1, slideFromTop2, slideFromTop3
    , slideFromTop4, slideFromRight, slideFromLeft, fadeInFromBottom1, fadeInFromBottom2, fadeInFromBottom3, fadeInFromBottom4, fadeInFromBottom5, enterFromLeft
    , fadeInFromLeft2,fadeInFromBottomToTop1,fadeInFromBottomToTop2,fadeInFromBottomToTop3,fadeInFromTop2,fadeInFromTop3
  ]
})
export class ClientsComponent implements OnInit {
  ngOnInit(): void {

  }
}

