import { TestBed } from '@angular/core/testing';

import { MeatDataService } from './meat-data.service';

describe('MeatDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeatDataService = TestBed.get(MeatDataService);
    expect(service).toBeTruthy();
  });
});
