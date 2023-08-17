import { Component } from '@angular/core';
import { AlertsService } from './services/alerts.service';
import { IAlert } from './interfaces/ialert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  alerts: IAlert[];

  constructor(private alertService: AlertsService) {
    this.alerts = this.alertService.getAlerts();
  }

  /**
   * Closes a specific alert
   *
   * @param alert - Alert details
   */
  closeAlert(alert: IAlert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
