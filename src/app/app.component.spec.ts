import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AlertsComponent } from './shared/components/alerts/alerts.component';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Component } from '@angular/core';

class RouterStub {
  public events = new Subject();
}
describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, AlertsComponent],
      providers: [
        {
          provide: Router,
          useClass: RouterStub
        }
      ]
    })
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'InvitationCard'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('InvitationCard');
  });

  it('should be login route', fakeAsync(() => {
    const ne = new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login');
    ((app as any).router.events as Subject<any>).next(ne);
    tick(3000)
    expect(app.isLoginRoute).toBeTrue();
  }));

  it('should be non login route', fakeAsync(() => {
    const ne = new NavigationEnd(0, 'http://localhost:4200/home', 'http://localhost:4200/home');
    ((app as any).router.events as Subject<any>).next(ne);
    tick(3000);
    expect(app.isLoginRoute).toBeFalse();
  }));
});
