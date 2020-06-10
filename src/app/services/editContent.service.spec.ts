import { TestBed } from '@angular/core/testing';

import { EditContentService } from './editContent.service';

describe('EditContentService', () => {
  let service: EditContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditcontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
