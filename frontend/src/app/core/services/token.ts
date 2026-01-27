import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Token {
  save(token: string) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  clear() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!this.get();
  }
}
