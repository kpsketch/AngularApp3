import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  error = '';

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
}