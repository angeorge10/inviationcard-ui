/* eslint-disable @typescript-eslint/no-empty-function */
import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

describe('UtilityService', () => {
  let service: UtilityService;
  class NgbModalStub {
    open() {
      return {
        close() {}
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: NgbModal, useClass: NgbModalStub}]
    });
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('showLoader should increase counter and set spinnerModalRef', () => {
    service.showLoader();
    expect((service as any).spinnerCounter).toBe(1);
    expect((service as any).spinnerModalRef).toBeDefined();
  });

  it('hideLoader should decrement counter to zero and clear spinnerModalRef', () => {
    service.showLoader();
    service.hideLoader();
    expect((service as any).spinnerCounter).toBe(0);
    expect((service as any).spinnerModalRef).toBeUndefined();
  });

  it('hideLoader should decrement counter to 1 and spinnerModalRef will be defined', () => {
    service.showLoader();
    service.showLoader();
    service.hideLoader();
    expect((service as any).spinnerCounter).toBe(1);
    expect((service as any).spinnerModalRef).toBeDefined();
  });

});
