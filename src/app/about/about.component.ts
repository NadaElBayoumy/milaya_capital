import { Component } from '@angular/core';
import { fadeInFromTop, fadeInFromTop1, fadeInFromTop2 } from '../animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInFromTop, fadeInFromTop1, fadeInFromTop2]
})

export class AboutComponent {

}
