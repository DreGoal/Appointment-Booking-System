import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Provider {
  id: number;
  name: string;
  specialization: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseUrl = 'http://localhost:8080/api/providers';

  private http = inject(HttpClient);
  
  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.baseUrl);
  }
}
