import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  error = '';
  success = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  loginUser(f: NgForm): void {
    this.error = '';
    this.success = '';

    this.bookService.login(this.user).subscribe({
      next: (res: any) => {
        if (res.success == 1) {
          localStorage.setItem('loggedUser', JSON.stringify(res.data));
          f.reset();
          window.location.href = '/list';
        } else {
          this.error = res.message;
        }
      },
      error: (err) => {
        this.error = err.error?.message || 'Login failed';
      }
    });
  }
}