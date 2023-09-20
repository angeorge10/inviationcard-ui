/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendComponent } from './add-friend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFriendService } from './services/add-friend.service';
import { of } from 'rxjs';
import { AlertsService } from 'src/app/shared/components/alerts/services/alerts.service';

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
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFriendComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: AddFriendService,
          useClass: AddFriendServiceStub
        },
        {
          provide: AlertsService,
          useClass: AlertServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(AddFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
