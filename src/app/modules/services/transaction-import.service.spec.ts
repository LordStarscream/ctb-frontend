import { TestBed } from '@angular/core/testing';

import { TransactionImportService } from './transaction-import.service';

describe('TransactionImportService', () => {
  let service: TransactionImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
