/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendComponent } from './add-friend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFriendService } from './services/add-friend.service';
import { of } from 'rxjs';
import { AlertsService } from 'src/app/shared/components/alerts/services/alerts.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewFriendComponent } from '../view-friend/view-friend.component';

describe('AddFriendComponent', () => {
  let component: AddFriendComponent;
  let fixture: ComponentFixture<AddFriendComponent>;
  class AddFriendServiceStub {
    add() {
      return of({});
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
      declarations: [AddFriendComponent],
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'friends',
              component: ViewFriendComponent
            }
          ]
        )
      ],
      providers: [
        {
          provide: AddFriendService,
          useClass: AddFriendServiceStub
        },
        {
          provide: AlertsService,
          useClass: AlertServiceStub
        },
        {
          provide: Router,
          useCLass: RouterStub
        },
      ]
    });
    fixture = TestBed.createComponent(AddFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add friend', () => {
    spyOn((component as any).addFriend, 'add').and.callThrough();
    component.addFriendToUser();
    expect((component as any).addFriend.add).toHaveBeenCalled();
  });
});
