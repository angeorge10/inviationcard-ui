import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardComponent } from './create-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ViewCardsComponent } from '../view-cards/view-cards.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertsService } from 'src/app/shared/components/alerts/services/alerts.service';
import { CreateCardService } from './services/create-card.service';
import { Router } from '@angular/router';

describe('CreateCardComponent', () => {
  let component: CreateCardComponent;
  let fixture: ComponentFixture<CreateCardComponent>;
  class CreateCardServiceStub {
    createCard() {
      return of({});
    }

    getAllFriends() {
      return of();
    }
  }
  class AlertServiceStub {
    addAlert() {}
  }
  class  RouterStub{
    navigate() {}
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCardComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes(
        [
          {
            path: 'cards',
            component: ViewCardsComponent
          }
        ]
      )],
      providers: [
        {
          provide: AlertsService,
          useClass: AlertServiceStub
        },
        {
          provide: CreateCardService,
          useClass: CreateCardServiceStub
        },
        {
          provide: Router,
          useClass: RouterStub
        }
      ]
    });
    fixture = TestBed.createComponent(CreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sendInvitation should call createCard service', () => {
    spyOn((component as any).createCardService, 'createCard').and.callThrough();
    component.sendInvitation();
    expect((component as any).createCardService.createCard).toHaveBeenCalled();
  });

  it('stepChange should set progressBarValue', () => {
    component.stepChange(4);
    expect(component.progressBarValue).toBe(100);

  });
});
