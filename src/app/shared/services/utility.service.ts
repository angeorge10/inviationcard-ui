import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { IUserDetails } from '../interfaces/iuser-details';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private spinnerModalRef: NgbModalRef;
  private spinnerCounter = 0;
  private userDetails: IUserDetails;

  constructor(private modalService: NgbModal) { }
  /**
   * Opens the spinner modal for backdrop
   */
  private openSpinnerModal() {
      this.spinnerModalRef = this.modalService.open(SpinnerComponent, {
        backdrop: 'static',
        centered: true,
        windowClass: 'spinnerModalClass',
        keyboard: false
      });
  }

  /**
   * Shows the loader
   */
  showLoader() {
    this.spinnerCounter++;
    if (!this.spinnerModalRef) {
      this.openSpinnerModal();
    }
  }

  /**
   * Hides Loader
   */
  hideLoader() {
    if (this.spinnerCounter > 0) {
      this.spinnerCounter--;
    } 
    
    if (this.spinnerCounter <= 0 ) {
      this.clearLoader();
    }

  }

  /**
   * Clears the loader
   */
  clearLoader() {
    this.spinnerCounter = 0;
    this.spinnerModalRef.close();
    this.spinnerModalRef = undefined;
  }

  /**
   * Sets the user details of logged in user
   *
   * @param details - User Details
   */
  setUserDetails(details: IUserDetails) {
    this.userDetails = details;
  }

  /**
   * Gets the looged in user deytails
   *
   * @returns Logged in user details
   */
  getUserDetails(): IUserDetails {
    return this.userDetails;
  }
}
