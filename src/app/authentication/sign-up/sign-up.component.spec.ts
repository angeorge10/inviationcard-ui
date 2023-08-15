import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SignUpService } from './services/sign-up.service';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  class SignUpServiceStub {
    signUp() {
      return of({});
    }

    getStates() {
      return [''];
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SignUpComponent],
      providers: [{
        provide: SignUpService,
        useClass: SignUpServiceStub
      }]
    });
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeState should update the value of state form field', () => {
    spyOn(component.stateControl, 'setValue').and.callThrough();
    const updatedState = 'State';
    component.changeState({
      target: {
        value: updatedState
      }
    });
    expect(component.stateControl.setValue).toHaveBeenCalledWith(updatedState);
  });

  it('onSignUp should call signUpService signUp', () => {
    spyOn((component as any).signUpService, 'signUp').and.callThrough();
    component.onSignUp();
    expect((component as any).signUpService.signUp).toHaveBeenCalled();
  });
});
