import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutApiService } from '../../apis/logout/logout-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private logoutApiService: LogoutApiService) {}

  logout() {
    this.logoutApiService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
