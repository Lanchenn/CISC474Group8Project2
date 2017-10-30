import { TestBed, inject } from '@angular/core/testing';
import { ArtMuseumService } from './art-museum.service';

describe('ArtMuseumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtMuseumService]
    });
  });

  it('should be created', inject([ArtMuseumService], (service: ArtMuseumService) => {
    expect(service).toBeTruthy();
  }));
});
