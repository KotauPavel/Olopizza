import { TestBed, inject } from '@angular/core/testing';

import { GetpizzasService } from './getpizzas.service';

describe('GetpizzasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetpizzasService]
    });
  });

  it('should be created', inject([GetpizzasService], (service: GetpizzasService) => {
    expect(service).toBeTruthy();
  }));
});
