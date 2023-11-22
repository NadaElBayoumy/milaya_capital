import { Component } from '@angular/core';
import { fadeInFromTop,fadeInFromRight,fadeInFromBottom,fadeInFromBottom1,fadeInFromBottom2,fadeInFromBottom3} from '../../animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [ fadeInFromTop,fadeInFromRight,fadeInFromBottom,fadeInFromBottom1,fadeInFromBottom2,fadeInFromBottom3 ]
})
export class FooterComponent {
  userEmail: string = '';
  isMobile: boolean = false;
  
  constructor(private toastr: ToastrService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  isEmailInvalid(): boolean  {
    if( this.userEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userEmail)){
      this.showSuccess();
      return true;
    }else{
      return false;
    }
  }

  onSendMail():any{
    this.showSuccess();
  }



  showSuccess() {
    this.toastr.success('Your Email is subscribed sucessfully to Milaya Capital news letter', '');
  }

}
