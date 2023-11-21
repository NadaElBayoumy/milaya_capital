// toast.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<any>(null);
  toastState = this.toastSubject.asObservable();

  constructor() { }

  show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') {
    this.toastSubject.next({ message, type });
  }

  clear() {
    this.toastSubject.next(null);
  }
}
