import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFriendComponent } from './view-friend.component';
import { SortableTableHeaderDirective } from 'src/app/shared/directives/sortable-table-header/sortable-table-header.directive';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewFriendService } from './services/view-friend.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('ViewFriendComponent', () => {
  let component: ViewFriendComponent;
  let fixture: ComponentFixture<ViewFriendComponent>;
  class ViewFriendServiceStub{
    getAll() {
      return of([]);
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
});
