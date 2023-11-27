import { Component,Input,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss']
})
export class CounterCardComponent implements OnInit {
  isMobile: boolean = false;
  @Input() number!: number;
  @Input() text!: string;
  currentCount: number = 0;

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
  ngOnInit(): void {
    // Start the animation when the component is initialized
    this.incrementCounter();
  }

  incrementCounter() {
    if (this.currentCount < this.number) {
      this.currentCount++;
      setTimeout(() => this.incrementCounter(), 50);
    }
  }
}
