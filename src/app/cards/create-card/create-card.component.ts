import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

export class CreateCardComponent {
  templates: Template[] = [
    { value: '0', viewValue: 'Template1', img: '/assets/template_1.jpg' },
    { value: '1', viewValue: 'Template2', img: '/assets/template_2.jpg' },
    { value: '2', viewValue: 'Template3', img: '/assets/template_3.jpg' },
    { value: '3', viewValue: 'Template4', img: '/assets/template_4.jpg' },
    { value: '4', viewValue: 'Template5', img: '/assets/template_5.jpg' },
    { value: '5', viewValue: 'Template6', img: '/assets/template_6.jpg' }
  ]; 
  eventtitle: any;
  eventdescription: any;
  datepicker: any;
  timepicker: any;
  eventaddress: any;
  selectfriends: any;
}

