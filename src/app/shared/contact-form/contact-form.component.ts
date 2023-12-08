import { Component, HostListener } from '@angular/core';
import { slideInFromRight, fadeInFromRight, fadeInFromTop1, slideInFromRight2 } from '../../animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MilayaService } from 'src/app/milaya.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [slideInFromRight, fadeInFromRight, fadeInFromTop1, slideInFromRight2],
})

export class ContactFormComponent {
  contactForm: FormGroup;
  isMobile: boolean = false;
  address:any;
  company_email:any;
  isLoading: boolean = true;

  constructor(private milayaService: MilayaService, private toastr: ToastrService, private fb: FormBuilder, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
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
    this.milayaService.getContactInfo().subscribe((contact_info) => {
      this.address = contact_info.acf?.address;
      this.company_email = contact_info.acf?.company_email;
      this.isLoading = false;
    });
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      sur_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      company: [''],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendEmail({
        to: this.contactForm?.value?.email,
        subject: 'From Milaya Capital Website Contact Us Form',
        message: this.contactForm?.value?.message
      });
    }
  }

  sendEmail(emailData:any) {
    this.milayaService.sendEmail(emailData).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
        this.toastr.success('Contact form submitted successfully', 'Success', {
          positionClass: 'toast-top-right',
          timeOut: 200000, 
        });
        this.contactForm.reset();
      },
      (error) => {
        console.error('Error sending email:', error)
      }
    );
  }
}
