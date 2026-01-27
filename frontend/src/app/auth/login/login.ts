import { Component } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
   imports: [
    CommonModule,
    FormsModule
   ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
 email = '';
  password = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  login() {
  this.authService.login({
    email: this.email,
    password: this.password
  }).subscribe({
    next: (res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']);
    },
    error: () => alert('Invalid credentials')
  });
}

}
