import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-updatebook',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './updatebook.component.html',
  styleUrl: './updatebook.component.css'
})
export class UpdatebookComponent implements OnInit {

  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };

  error = '';
  success = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.bookService.getById(id).subscribe({
        next: (data: Book) => {
          this.book = data;
        },
        error: (err) => {
          this.error = err.error?.message || 'Error loading book';
        }
      });
    }
  }

  updateBook(f: NgForm): void {
    this.error = '';
    this.success = '';

    this.bookService.update(this.book).subscribe({
      next: () => {
        this.success = 'Book updated successfully';
        this.router.navigate(['/list']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Error updating book';
      }
    });
  }
}