import { TestBed } from '@angular/core/testing';

import { NewsApiEnService } from './news-api-en.service';

describe('NewsApiEnService', () => {
  let service: NewsApiEnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiEnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
