import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BooksComponent },
  { path: 'add', component: AddbookComponent },
  { path: 'update/:id', component: UpdatebookComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];