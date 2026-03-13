import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {

  book: Book = {
    title: '',
    author: '',
    description: ''
  };

  error = '';
  success = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  addBook(f: NgForm) {

    this.error = '';
    this.success = '';

    this.bookService.add(this.book).subscribe({
      next: () => {

        this.success = "Book added successfully";

        f.reset();

        this.router.navigate(['/list']);
      },

      error: (err) => {
        this.error = err.error?.message || "Error adding book";
      }
    });

  }

}