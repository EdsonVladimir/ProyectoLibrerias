import { TestBed } from '@angular/core/testing';

import { LibGenericosService } from './lib-genericos.service';

describe('LibGenericosService', () => {
  let service: LibGenericosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibGenericosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
