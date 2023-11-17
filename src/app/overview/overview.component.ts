import { Component , Input } from '@angular/core';
import { slideFromTop ,slideFromTop2
} from '../animations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    slideFromTop ,slideFromTop2
  ],
})

export class OverviewComponent {
  @Input() pageTitle!: string;
  @Input() pageOverviewText!: string;
  @Input() direction!: string;
  @Input() light! :string;
}
