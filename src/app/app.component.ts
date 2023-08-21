import { Component } from '@angular/core';
import { NavigationEnd, Router, Event, RouterEvent } from '@angular/router';
import { includes } from 'lodash-es';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvitationCard';
  isLoginRoute = true;
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((e: Event | RouterEvent): e is RouterEvent => e instanceof NavigationEnd)
      )
      .subscribe(
        (event: RouterEvent) => {
          console.log(event);
          if (event.url?.includes('login') || (event as any).urlAfterRedirects?.includes('login')) {
            this.isLoginRoute = true;
          } else {
            this.isLoginRoute = false;
          }
        }
      )
  }
}
