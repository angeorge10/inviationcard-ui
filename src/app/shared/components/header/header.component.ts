import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutApiService } from '../../apis/logout/logout-api.service';
import { UtilityService } from '../../services/utility.service';
import { IUserDetails } from '../../interfaces/iuser-details';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = 'Guest';
  private userDetails: IUserDetails
  constructor(private router: Router, 
    private logoutApiService: LogoutApiService, 
    private utilityservice: UtilityService) { }

  ngOnInit(): void {
    this.userDetails = this.utilityservice.getUserDetails();
    if (this.userDetails?.firstName) {
      this.userName = this.userDetails.firstName
    }
  }
  logout() {
    this.logoutApiService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
