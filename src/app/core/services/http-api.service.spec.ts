/* eslint-disable @typescript-eslint/no-empty-function */
import { TestBed } from '@angular/core/testing';

import { HttpApiService } from './http-api.service';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { finalize, of } from 'rxjs';
import { IApiConfig } from '../interfaces/iapi-config';
import { IApiAdvancedOptions } from '../interfaces/iapi-advanced-options';
import { AlertsService } from 'src/app/shared/components/alerts/services/alerts.service';

describe('HttpApiService', () => {
  let service: HttpApiService;
  class HttpClientStub {
    get() {
      return of({
        body: {}
      });
    }
    patch() {
      return of({
        body: {}
      });
    }
    put() {
      return of({
        body: {}
      });
    }
    delete() {
      return of({
        body: {}
      });
    }
    post() {
      return of({
        body: {}
      });
    }
  }

  class UtilityServiceStub {
    showLoader() {}
    hideLoader() {}
  }

  class AlertServiceStub {
    addAlert() {}
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: HttpClientStub }, 
        { provide: UtilityService, useClass: UtilityServiceStub },
        { provide: AlertsService, useClass: AlertServiceStub}
      ]
    });
    service = TestBed.inject(HttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('httpGet should generate the url and show loader', () => {
    const apiConfig = {
      id: 'apiID',
      endpoint: '/login'
    } as IApiConfig;
    spyOn((service as any).httpClient, 'get').and.callThrough();
    spyOn((service as any).utilityService, 'showLoader').and.callThrough();
    spyOn((service as any).utilityService, 'hideLoader').and.callThrough();
    service.httpGet(apiConfig).pipe(finalize(() => {
      expect((service as any).utilityService.hideLoader).toHaveBeenCalled();
    })).subscribe((response) => {
      expect(response).toBeDefined();
      expect((service as any).httpClient.get).toHaveBeenCalledWith('/api/login', jasmine.any(Object));
      expect((service as any).utilityService.showLoader).toHaveBeenCalled();
    });
  });

  it('httpPost should generate the url and body and not show loader when advanced option is having hideLoader true', () => {
    const apiConfig = {
      id: 'apiID',
      endpoint: '/signUp'
    } as IApiConfig;
    const advOptions = {
      hideLoader: true
    } as IApiAdvancedOptions
    const body = {
      user: ''
    };
    spyOn((service as any).httpClient, 'post').and.callThrough();
    spyOn((service as any).utilityService, 'showLoader').and.callThrough();
    spyOn((service as any).utilityService, 'hideLoader').and.callThrough();
    service.httpPost(apiConfig, body, undefined, advOptions).pipe(finalize(() => {
      expect((service as any).utilityService.hideLoader).not.toHaveBeenCalled();
    })).subscribe((response) => {
      expect(response).toBeDefined();
      expect((service as any).httpClient.post).toHaveBeenCalledWith('/api/signUp', body, jasmine.any(Object));
      expect((service as any).utilityService.showLoader).not.toHaveBeenCalled();
    });
  });

  it('httpDelete to return response', () => {
    const apiConfig = {
      id: 'apiID',
      endpoint: '/user'
    } as IApiConfig;
    service.httpDelete(apiConfig).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });

  it('httpPut to return response', () => {
    const apiConfig = {
      id: 'apiID',
      endpoint: '/user'
    } as IApiConfig;
    service.httpPut(apiConfig, {}).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });

  it('httpPatch to return response', () => {
    const apiConfig = {
      id: 'apiID',
      endpoint: '/user'
    } as IApiConfig;
    service.httpPatch(apiConfig, {}).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
});
