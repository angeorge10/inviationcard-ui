import { Component, OnInit, PipeTransform, QueryList, ViewChildren } from '@angular/core';
import { SortEvent, SortableTableHeaderDirective } from 'src/app/shared/directives/sortable-table-header/sortable-table-header.directive';
import { IFriendApi } from '../apis/interfaces/ifriend-api';
import { ViewFriendService } from './services/view-friend.service';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.scss']
})
export class ViewFriendComponent implements OnInit {
  @ViewChildren(SortableTableHeaderDirective) headers: QueryList<SortableTableHeaderDirective>;
  pagination = {
    total: 0,
    page: 1,
    pageSize: 10
  };
  sortObj: {
    column: keyof IFriendApi,
    direction: string
  } = {
    column: 'name',
    direction: 'asc'
  };
  searchTerm = '';
  friendsList = [] as IFriendApi[];
  private masterFriendsList = [] as IFriendApi[];

  constructor(private viewFriendService: ViewFriendService) {}

  ngOnInit(): void {
    this.getFriends();
  }

  private getFriends() {
    this.viewFriendService.getAll().subscribe((response) => {
      this.masterFriendsList = response;
      this._search(this.masterFriendsList);
    });
  }

  private _search(data: IFriendApi[]) {
		// 1. sort
		let friends = this.sort(data, this.sortObj.column, this.sortObj.direction);
		// 2. filter
		friends = friends.filter((country) => this.matches(country, this.searchTerm));
		this.pagination.total = friends.length;
		// 3. paginate
		friends = friends.slice((this.pagination.page - 1) * this.pagination.pageSize, (this.pagination.page - 1) * this.pagination.pageSize + this.pagination.pageSize);
		this.friendsList = cloneDeep(friends);
	}

  private sort(friends: IFriendApi[], column: keyof IFriendApi, direction: string): IFriendApi[] {
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

  private matches(friend: IFriendApi, term: string) {
    return (
      friend.name.toLowerCase().includes(term.toLowerCase()) ||
      friend.email.toLowerCase().includes(term)
    );
  }

  refreshFriends() {
    this._search(this.masterFriendsList);
  }

  onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.sortObj.column = column as keyof IFriendApi;
		this.sortObj.direction = direction;
    this._search(this.masterFriendsList);
	}

}
