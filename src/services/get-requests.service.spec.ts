import { TestBed } from '@angular/core/testing';

import { GetRequestsService } from './get-requests.service';

describe('GetRequestsService', () => {
  let service: GetRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
