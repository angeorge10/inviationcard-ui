/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { of } from 'rxjs';
import { LogoutApiService } from '../../apis/logout/logout-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { UtilityService } from '../../services/utility.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  class LogoutApiServiceStub {
    logout() {
      return of({});
    }
  }

  class RouterStub {
    navigate() {}
  }

  class UtilityServiceStub {
    getUserDetails() {
      return {
        email: 'a@gmail.com',
        firstName: 'first',
        lastName: 'last'
      };
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: LogoutApiService,
          useClass: LogoutApiServiceStub
        },
        {
          provide: Router,
          useCLass: RouterStub
        },
        {
          provide: UtilityService,
          useClass: UtilityServiceStub
        }
      ],
      imports: [RouterTestingModule.withRoutes(
        [
          {path: 'login', component: LoginComponent}
        ]
      )]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logout should be called', () => {
    spyOn((component as any).logoutApiService, 'logout').and.callThrough();
    component.logout();
    expect((component as any).logoutApiService.logout).toHaveBeenCalled();
  });
});
