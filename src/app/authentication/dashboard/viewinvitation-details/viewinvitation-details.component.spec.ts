import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinvitationDetailsComponent } from './viewinvitation-details.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';

describe('ViewinvitationDetailsComponent', () => {
  let component: ViewinvitationDetailsComponent;
  let fixture: ComponentFixture<ViewinvitationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewinvitationDetailsComponent, NavigationComponent, FooterComponent]
    });
    fixture = TestBed.createComponent(ViewinvitationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
