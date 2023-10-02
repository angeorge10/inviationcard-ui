import { Component, QueryList, ViewChildren } from '@angular/core';
import { ICardApi } from '../apis/interfaces/icard-api';
import { SortEvent, SortableTableHeaderDirective } from 'src/app/shared/directives/sortable-table-header/sortable-table-header.directive';
import { ViewCardsService } from './services/view-cards.service';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.scss']
})
export class ViewCardsComponent {
  @ViewChildren(SortableTableHeaderDirective) headers: QueryList<SortableTableHeaderDirective>;
  pagination = {
    total: 0,
    page: 1,
    pageSize: 10
  };
  sortObj: {
    column: keyof Pick<ICardApi, 'title' | 'date' | 'time' | 'location'>,
    direction: string
  } = {
    column: 'title',
    direction: 'asc'
  };
  searchTerm = '';
  cardsList = [] as ICardApi[];
  private cardFriendsList = [] as ICardApi[];

  constructor(private viewCardsService: ViewCardsService) {}

  ngOnInit(): void {
    this.getCards();
  }

  private getCards() {
    this.viewCardsService.getAll().subscribe((response) => {
      this.cardFriendsList = response;
      this._search(this.cardFriendsList);
    });
  }

  private _search(data: ICardApi[]) {
		// 1. sort
		let friends = this.sort(data, this.sortObj.column, this.sortObj.direction);
		// 2. filter
		friends = friends.filter((friend) => this.matches(friend, this.searchTerm));
		this.pagination.total = friends.length;
		// 3. paginate
		friends = friends.slice((this.pagination.page - 1) * this.pagination.pageSize, (this.pagination.page - 1) * this.pagination.pageSize + this.pagination.pageSize);
		this.cardsList = cloneDeep(friends);
	}

  private sort(friends: ICardApi[], column: keyof Pick<ICardApi, 'title' | 'date' | 'time' | 'location'>, direction: string): ICardApi[] {
    if (direction === '' || !column) {
      return friends;
    } else {
      return [...friends].sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  private compare(v1: string | number, v2: string | number) {
    return (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
  }

  private matches(card: ICardApi, term: string) {
    return (
      card.title.toLowerCase().includes(term.toLowerCase()) ||
      card.date.toLowerCase().includes(term.toLowerCase()) ||
      card.time.toLowerCase().includes(term.toLowerCase()) ||
      card.location.toLowerCase().includes(term.toLowerCase())
    );
  }

  refreshCards() {
    this._search(this.cardFriendsList);
  }

  onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.sortObj.column = column as keyof Pick<ICardApi, 'title' | 'date' | 'time' | 'location'>;
		this.sortObj.direction = direction;
    this._search(this.cardFriendsList);
	}
}
