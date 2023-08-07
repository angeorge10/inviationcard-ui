import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  private spinnerModalRef: NgbModalRef;
  private spinnerCounter = 0;

  constructor(private modalService: NgbModal) { }

  private openSpinnerModal() {
      this.spinnerModalRef = this.modalService.open(SpinnerComponent, {
        backdrop: 'static',
        centered: true,
        windowClass: 'spinnerModalClass',
        keyboard: false
      });
  }

  showLoader() {
    this.spinnerCounter++;
    if (!this.spinnerModalRef) {
      this.openSpinnerModal();
    }
  }

  hideLoader() {
    if (this.spinnerCounter > 0) {
      this.spinnerCounter--;
    } 
    
    if (this.spinnerCounter <= 0 ) {
      this.clearLoader();
    }

  }

  clearLoader() {
    this.spinnerCounter = 0;
    this.spinnerModalRef.close();
    this.spinnerModalRef = undefined;
  }
}
