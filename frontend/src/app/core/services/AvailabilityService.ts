import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  private baseUrl = environment.apiUrl + '/api/availability';

  constructor(private http: HttpClient) {}

  saveAvailability(data: unknown) {
    return this.http.post(this.baseUrl, data);
  }

  getMyAvailability() {
    return this.http.get(this.baseUrl + '/my');
  }
}
