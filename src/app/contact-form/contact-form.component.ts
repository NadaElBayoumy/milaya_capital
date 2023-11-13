import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  model: any = {}; 

  onSubmit() {
    console.log('Form submitted!', this.model);
  }
}
