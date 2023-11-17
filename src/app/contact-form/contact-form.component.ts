import { Component } from '@angular/core';
import { 
  slideInFromRight,
  fadeInFromRight,
  fadeInFromTop1,
  slideInFromRight2,
} from '../animations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']  ,
  animations: [
    slideInFromRight,
    fadeInFromRight,
    fadeInFromTop1,
    slideInFromRight2
  ],
})
export class ContactFormComponent {
  model: any = {}; 

  onSubmit() {
    console.log('Form submitted!', this.model);
  }
}
