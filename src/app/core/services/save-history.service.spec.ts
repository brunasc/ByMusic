import { TestBed } from '@angular/core/testing';

import { SaveHistoryService } from './save-history.service';

describe('SaveHistoryService', () => {
  let service: SaveHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
