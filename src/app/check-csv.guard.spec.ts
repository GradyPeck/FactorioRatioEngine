import { TestBed, async, inject } from '@angular/core/testing';

import { CheckCsvGuard } from './check-csv.guard';

describe('CheckCsvGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckCsvGuard]
    });
  });

  it('should ...', inject([CheckCsvGuard], (guard: CheckCsvGuard) => {
    expect(guard).toBeTruthy();
  }));
});
