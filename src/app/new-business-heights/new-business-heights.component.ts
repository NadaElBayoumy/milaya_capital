import { Component} from '@angular/core';
import {   slideLeftToRight,fadeInFromTop} from '../animations';

@Component({
  selector: 'app-new-business-heights',
  templateUrl: './new-business-heights.component.html',
  styleUrls: ['./new-business-heights.component.scss'],
  animations: [    slideLeftToRight,fadeInFromTop  ],
})
export class NewBusinessHeightsComponent {

}
