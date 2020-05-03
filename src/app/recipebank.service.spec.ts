import { TestBed } from '@angular/core/testing';

import { RecipebankService } from './recipebank.service';

describe('RecipebankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipebankService = TestBed.get(RecipebankService);
    expect(service).toBeTruthy();
  });
});
