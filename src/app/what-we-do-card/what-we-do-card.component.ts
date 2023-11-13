import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-what-we-do-card',
  templateUrl: './what-we-do-card.component.html',
  styleUrls: ['./what-we-do-card.component.scss']
})
export class WhatWeDoCardComponent {
  @Input() title!: string;
  @Input() description!: string;
}
