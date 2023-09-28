import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFriendComponent } from './view-friend.component';
import { SortEvent, SortableTableHeaderDirective } from 'src/app/shared/directives/sortable-table-header/sortable-table-header.directive';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewFriendService } from './services/view-friend.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('ViewFriendComponent', () => {
  let component: ViewFriendComponent;
  let fixture: ComponentFixture<ViewFriendComponent>;
  class ViewFriendServiceStub{
    getAll() {
      return of([
        {
          name: "Friend1",
          email: 'a@gmail.com'
        },
        {
          name: "Friend2",
          email: 'b@gmail.com'
        }
      ]);
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFriendComponent, SortableTableHeaderDirective],
      imports: [NgbPaginationModule,NgbModule, FormsModule],
      providers: [
        {
          provide: ViewFriendService,
          useClass: ViewFriendServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(ViewFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort grid on email', () => {
    component.onSort({
      column: 'email',
      direction: 'asc'
    } as SortEvent)
  });

  it('should refresh list', () => {
    spyOn((component as any).sortObj, 'direction').and.returnValue('');
    spyOn((component as any).sortObj, 'column').and.returnValue('email');
    spyOn(component as any, '_search').and.callThrough();
    component.refreshFriends();
    expect((component as any)._search).toHaveBeenCalled();
  });
});
