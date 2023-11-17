import { Component , Input} from '@angular/core';
import {
  slideFromLeft , slideFromTop1 ,slideFromTop2, slideFromTop3 , slideFromTop4 ,slideFromRight
} from '../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] ,
  animations: [
    slideFromLeft , slideFromTop1 ,slideFromTop2, slideFromTop3 , slideFromTop4 ,slideFromRight
  ],
})
export class NavbarComponent {
  @Input() isHome!: boolean;
  @Input() isContact!: boolean;
}
