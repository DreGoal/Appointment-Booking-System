import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SlotAvailabilityRequest {
  providerId: number;
  date: string; // yyyy-MM-dd
}

export interface Slot {
  id: number;
  startTime: string;
  endTime: string;
  status: 'AVAILABLE' | 'BOOKED';
}

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  private baseUrl = 'http://localhost:8080/api/slots';

  private http = inject(HttpClient);

  getAvailableSlots(payload: SlotAvailabilityRequest): Observable<Slot[]> {
    return this.http.post<Slot[]>(`${this.baseUrl}/available`, payload);
  }
}
