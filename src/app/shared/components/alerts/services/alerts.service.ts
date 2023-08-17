/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { IAlert } from '../interfaces/ialert';
import { AlertType } from '../enums/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private alerts = [] as IAlert[];
  constructor() { }

  getAlerts() {
    return this.alerts;
  }

  addAlert(type: AlertType, message: string) {
    this.alerts.push({
      message,
      type
    } as IAlert);
  }
}
