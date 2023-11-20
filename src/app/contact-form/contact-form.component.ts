import { Component } from '@angular/core';
import { slideInFromRight, fadeInFromRight, fadeInFromTop1, slideInFromRight2, } from '../animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [slideInFromRight, fadeInFromRight, fadeInFromTop1, slideInFromRight2],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isMobile: boolean = false;
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      sur_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      company: [''],
    });
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }


 


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      sur_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      company: [''],
    });
  }

  onSubmit(): void {
    console.log('Form submitted!', this.contactForm);
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
    }
  }

}
