import { Component, inject, OnInit } from '@angular/core';
import { Provider, ProviderService } from '../../core/services/ProviderService';
import { Slot, SlotService } from '../../core/services/SlotService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slot-availability',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './slot-availability.html',
  styleUrls: ['./slot-availability.scss']
})
export class SlotAvailabilityComponent implements OnInit {

  providers: Provider[] = [];
  selectedProviderId!: number;
  selectedDate!: string;

  slots: Slot[] = [];
  loading = false;
  errorMessage = '';

  

  private providerService = inject(ProviderService);
  private slotService = inject(SlotService);

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders() {
    this.providerService.getProviders().subscribe({
      next: (data) => this.providers = data,
      error: () => this.errorMessage = 'Failed to load providers'
    });
  }

  checkAvailability() {
    if (!this.selectedProviderId || !this.selectedDate) {
      this.errorMessage = 'Please select provider and date';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.slotService.getAvailableSlots({
      providerId: this.selectedProviderId,
      date: this.selectedDate
    }).subscribe({
      next: (slots) => {
        this.slots = slots;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No slots available';
        this.loading = false;
      }
    });
  }

  selectSlot(slot: Slot) {
    console.log('Selected Slot:', slot);
    // 👉 Next step: Booking API
  }
}
