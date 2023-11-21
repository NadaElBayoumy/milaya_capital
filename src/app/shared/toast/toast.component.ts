import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'success';

  onClose() {
    // Add any logic you want to execute when the toast is closed
  }
}
