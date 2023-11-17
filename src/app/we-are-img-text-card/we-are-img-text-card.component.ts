import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-we-are-img-text-card',
  templateUrl: './we-are-img-text-card.component.html',
  styleUrls: ['./we-are-img-text-card.component.scss']
  ,animations: [

  ]
})
export class WeAreImgTextCardComponent {
  @Input() WeAreTitleCard!: string;
  @Input() WeAreDescriptionCard!: string;
}
