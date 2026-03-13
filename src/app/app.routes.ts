import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BooksComponent },
  { path: 'add', component: AddbookComponent }
];