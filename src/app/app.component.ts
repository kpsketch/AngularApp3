import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp3';
  loggedUser: any = null;

  constructor(private router: Router) {
    this.loadUser();
  }

  loadUser(): void {
    const userData = localStorage.getItem('loggedUser');
    if (userData) {
      this.loggedUser = JSON.parse(userData);
    }
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.loggedUser = null;
    this.router.navigate(['/login']);
  }
}