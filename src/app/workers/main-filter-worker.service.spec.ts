import { TestBed } from '@angular/core/testing';

import { MainFilterWorkerService } from './worker.service';

describe('WorkerService', () => {
  let service: MainFilterWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainFilterWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
