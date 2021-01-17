import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private _notification = new BehaviorSubject<Notification>(null);

  notifications$ = this._notification.asObservable();

  displayNotification(message: string, type = NotificationType.Success): void {
    this._notification.next({ message, type });
  }
}

export enum NotificationType {
  Success,
  Error,
}

export interface Notification {
  type: NotificationType;
  message: string;
}
