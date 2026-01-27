import { Component } from '@angular/core';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
    standalone: true,
   imports: [
    CommonModule,
    FormsModule
   ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
 name = '';
  email = '';
  password = '';
  role = 'USER';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  register() {
    this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => {
        alert('Registration successful');
        this.router.navigate(['/auth/login']);
      },
      error: () => alert('Registration failed')
    });
  }
}
