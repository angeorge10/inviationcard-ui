import { Component } from '@angular/core';
import { AddFriendService } from './services/add-friend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFriendRequest } from '../apis/interfaces/ifriend-api';
import { AlertsService } from 'src/app/shared/components/alerts/services/alerts.service';
import { AlertType } from 'src/app/shared/components/alerts/enums/alert-type.enum';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent {
  friendForm: FormGroup;
  /* states: string[]; */
  constructor(private fb: FormBuilder,
    private addFriend: AddFriendService,
    private router: Router,
    private alertService: AlertsService) {
    this.friendForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  /**
   * returns the signUp form controls
   */
  get friendFormControls() {
    return this.friendForm.controls;
  }

  /**
   * Callback when addFriend button is clicked.
   */
  addFriendToUser() {
    this.addFriend.add({ ...this.friendForm.value } as IFriendRequest).subscribe((response) => {
      this.alertService.addAlert(AlertType.SUCCESS, 'Successfully added Friend');
      void this.router.navigate(['/friends']);
    });
  }
}
