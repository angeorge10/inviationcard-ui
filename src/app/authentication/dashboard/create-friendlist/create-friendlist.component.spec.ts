import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFriendlistComponent } from './create-friendlist.component';

describe('CreateFriendlistComponent', () => {
  let component: CreateFriendlistComponent;
  let fixture: ComponentFixture<CreateFriendlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFriendlistComponent]
    });
    fixture = TestBed.createComponent(CreateFriendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
