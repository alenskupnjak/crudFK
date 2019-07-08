import { TestBed } from '@angular/core/testing';

import { ZadaciService } from './zadaci.service';

describe('ZadaciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZadaciService = TestBed.get(ZadaciService);
    expect(service).toBeTruthy();
  });
});
