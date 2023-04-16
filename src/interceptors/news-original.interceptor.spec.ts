import { TestBed } from '@angular/core/testing';

import { NewsOriginalInterceptor } from './news-original.interceptor';

describe('NewsOriginalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewsOriginalInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NewsOriginalInterceptor = TestBed.inject(NewsOriginalInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
