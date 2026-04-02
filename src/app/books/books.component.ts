import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  imports: [CommonModule, RouterModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  error = '';
  success = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAll().subscribe({
      next: (data: Book[]) => {
        this.books = data;
      },
      error: (err) => {
        this.error = err.error?.message || 'Error loading books';
      }
    });
  }

  deleteBook(id: number): void {
    this.error = '';
    this.success = '';

    if (!confirm('Are you sure you want to delete this book?')) {
      return;
    }

    this.bookService.delete(id).subscribe({
      next: () => {
        this.success = 'Book deleted successfully';
        this.loadBooks();
      },
      error: (err) => {
        this.error = err.error?.message || 'Error deleting book';
      }
    });
  }
}