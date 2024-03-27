import { TestBed } from '@angular/core/testing';

import { ElevateProjectLibraryService } from './elevate-project-library.service';

describe('ElevateProjectLibraryService', () => {
  let service: ElevateProjectLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevateProjectLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
