import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from '../book/book.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  firebaseRootURL =
    'https://bookitnight-default-rtdb.firebaseio.com/books.json';

  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService
  ) {}

  saveDataToFirebase() {
    const books = this.bookshelfService.getBooks();

    this.http.put(this.firebaseRootURL, books).subscribe((res) => {
      console.log('Firebase Put Req:', res);
    });
  }

  fetchDataFromFirebase() {
    return this.http.get(this.firebaseRootURL, {}).pipe(
      tap((res: Book[]) => {
        this.bookshelfService.setBooks(res);
      })
    );
  }
}
