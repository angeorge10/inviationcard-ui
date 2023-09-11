import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { of } from 'rxjs';
import { LogoutApiService } from '../../apis/logout/logout-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/authentication/login/login.component';

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
});
