import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'http://localhost/bookapi';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  add(book: Book) {
    return this.http.post(`${this.baseUrl}/add.php`, { data: book }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}