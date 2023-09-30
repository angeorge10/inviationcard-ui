import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CreateCardService } from './services/create-card.service';
import { ICardRequest } from '../apis/interfaces/icard-api';
import { IFriendApi } from 'src/app/friends/apis/interfaces/ifriend-api';

export interface Template {
  value: string;
  viewValue: string;
  img: string;
}
@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})

export class CreateCardComponent implements OnInit {
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepFourForm: FormGroup;
  templates: Template[] = [
    { value: '0', viewValue: 'Template1', img: '/assets/template_1.jpg' },
    { value: '1', viewValue: 'Template2', img: '/assets/template_2.jpg' },
    { value: '2', viewValue: 'Template3', img: '/assets/template_3.jpg' },
    { value: '3', viewValue: 'Template4', img: '/assets/template_4.jpg' },
    { value: '4', viewValue: 'Template5', img: '/assets/template_5.jpg' },
    { value: '5', viewValue: 'Template6', img: '/assets/template_6.jpg' }
  ]; 
  friendList = [] as IFriendApi[];
  progressBarValue = 0;
  currentStep = 0;
  readonly TOTAL_STEPS = 4;

  constructor(private fb: FormBuilder,
    private createCardService: CreateCardService) {
    this.stepOneForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: [undefined, Validators.required],
      time: [undefined, Validators.required],
      location: ['', Validators.required],
      file: [undefined]
    });
    this.stepTwoForm = this.fb.group({
      template: ['', Validators.required]
    });
    this.stepFourForm = this.fb.group({
      friends: [[], Validators.required]
    });
  }

  ngOnInit(): void {
    this.createCardService.getAllFriends().subscribe((resposne) => {
      this.friendList = resposne;
    });
  }

  /**
   * Callback for Send Invitation button
   */
  sendInvitation() {
    const reqBody = {
      title: this.stepOneForm.value['title'],
      description: this.stepOneForm.value['description'],
      date: this.stepOneForm.value['date'],
      time: this.stepOneForm.value['time'],
      location: this.stepOneForm.value['location'],
      templateId: 1,
      email: this.stepFourForm.value['friends']
    } as ICardRequest;
    this.createCardService.createCard(reqBody).subscribe(() => {
      console.log('Card created');
    });
  }

  /**
   * Callback when step change happens
   *
   * @param step - Next step number
   */
  stepChange(step: number) {
    this.currentStep = step;
    this.progressBarValue = (step - 1) * 100 / (this.TOTAL_STEPS - 1);
  }
}

