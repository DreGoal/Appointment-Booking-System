import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAvailability } from './slot-availability';

describe('SlotAvailability', () => {
  let component: SlotAvailability;
  let fixture: ComponentFixture<SlotAvailability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotAvailability]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotAvailability);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
