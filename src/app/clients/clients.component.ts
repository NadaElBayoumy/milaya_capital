import { Component, OnInit } from '@angular/core';
import { fadeInFromTop , fadeInFromTop1 , slideInFromLeft , slideInFromRight} from '../animations';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [fadeInFromTop , fadeInFromTop1 , slideInFromLeft , slideInFromRight  ]
})

export class ClientsComponent implements OnInit {
  ngOnInit(): void {

  }
}

