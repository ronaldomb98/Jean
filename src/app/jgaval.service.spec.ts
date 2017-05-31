/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JgavalService } from './jgaval.service';

describe('JgavalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JgavalService]
    });
  });

  it('should ...', inject([JgavalService], (service: JgavalService) => {
    expect(service).toBeTruthy();
  }));
});
