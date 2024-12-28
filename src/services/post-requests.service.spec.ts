import { TestBed } from '@angular/core/testing';

import { PostRequestsService } from './post-requests.service';

describe('PostRequestsService', () => {
  let service: PostRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
