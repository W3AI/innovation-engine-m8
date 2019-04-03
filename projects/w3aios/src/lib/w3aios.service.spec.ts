import { TestBed } from '@angular/core/testing';

import { W3aiosService } from './w3aios.service';

describe('W3aiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: W3aiosService = TestBed.get(W3aiosService);
    expect(service).toBeTruthy();
  });
});
