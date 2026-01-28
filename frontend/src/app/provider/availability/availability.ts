import { Component } from '@angular/core';
import { AvailabilityService } from '../../core/services/AvailabilityService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-availability',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './availability.html',
  styleUrl: './availability.scss',
})
export class Availability {
dayOfWeek = 'MONDAY';
  startTime = '';
  endTime = '';
  slotDuration = 30;

  constructor(private availabilityService: AvailabilityService) {}

  submit() {
    const payload = {
      dayOfWeek: this.dayOfWeek,
      startTime: this.startTime,
      endTime: this.endTime,
      slotDuration: this.slotDuration
    };

    this.availabilityService.saveAvailability(payload).subscribe({
      next: () => alert('Availability saved successfully'),
      error: err => {
        console.error(err);
        alert('Failed to save availability');
      }
    });
  }
}
