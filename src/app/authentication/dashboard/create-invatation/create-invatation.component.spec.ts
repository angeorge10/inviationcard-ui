import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvatationComponent } from './create-invatation.component';
import { NavigationComponent } from '../navigation/navigation.component';

describe('CreateInvatationComponent', () => {
  let component: CreateInvatationComponent;
  let fixture: ComponentFixture<CreateInvatationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInvatationComponent, NavigationComponent]
    });
    fixture = TestBed.createComponent(CreateInvatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
