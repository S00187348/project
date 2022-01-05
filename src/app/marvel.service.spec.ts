import { TestBed } from '@angular/core/testing';

import { MarvelApiCallService } from './marvel.service';

describe('MarvelService', () => {
  let service:MarvelApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
