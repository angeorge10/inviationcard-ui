import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardsComponent } from './view-cards.component';
import { of } from 'rxjs';
import { ViewCardsService } from './services/view-cards.service';
import { ICardApi } from '../apis/interfaces/icard-api';
import { SortEvent, SortableTableHeaderDirective } from 'src/app/shared/directives/sortable-table-header/sortable-table-header.directive';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('ViewCardsComponent', () => {
  let component: ViewCardsComponent;
  let fixture: ComponentFixture<ViewCardsComponent>;
  class ViewCardsServiceStub{
    getAll() {
      return of([
        {
          title: "Title1",
          date: '10/2/2023',
          time: '13:38',
          location: 'Location1'
        },
        {
          title: "Title2",
          date: '10/2/2023',
          time: '13:48',
          location: 'Location2'
        }
      ]);
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCardsComponent, SortableTableHeaderDirective],
      providers: [
        {
          provide: ViewCardsService,
          useClass: ViewCardsServiceStub
        }
      ],
      imports: [NgbPaginationModule,NgbModule, FormsModule]
    });
    fixture = TestBed.createComponent(ViewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort grid on date', () => {
    component.onSort({
      column: 'date',
      direction: 'asc'
    } as SortEvent)
  });

  it('should refresh list', () => {
    spyOn((component as any).sortObj, 'direction').and.returnValue('');
    spyOn((component as any).sortObj, 'column').and.returnValue('location');
    spyOn(component as any, '_search').and.callThrough();
    component.refreshCards();
    expect((component as any)._search).toHaveBeenCalled();
  });
});
