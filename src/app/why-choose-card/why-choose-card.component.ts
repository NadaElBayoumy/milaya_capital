import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-choose-card',
  templateUrl: './why-choose-card.component.html',
  styleUrls: ['./why-choose-card.component.scss']
})
export class WhyChooseCardComponent {
  @Input() src!: string;
  @Input() title!: string;
  @Input() description!: string;

}
