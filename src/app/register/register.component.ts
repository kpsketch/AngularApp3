import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  error = '';
  success = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  registerUser(f: NgForm): void {
    this.error = '';
    this.success = '';

    this.bookService.register(this.user).subscribe({
      next: (res: any) => {
        if (res.success == 1) {
          this.success = 'Registration successful';
          f.reset();
          this.router.navigate(['/login']);
        } else {
          this.error = res.message;
        }
      },
      error: (err) => {
        this.error = err.error?.message || 'Registration failed';
      }
    });
  }
}