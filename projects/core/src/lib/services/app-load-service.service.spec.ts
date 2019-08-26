import { TestBed } from '@angular/core/testing';

import { AppLoadServiceService } from './app-load-service.service';

describe('AppLoadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLoadServiceService = TestBed.get(AppLoadServiceService);
    expect(service).toBeTruthy();
  });
});
