import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();
  private myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Nolan',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Another Book',
      'Jacob',
      'Fiction',
      'https://source.unsplash.com/50x50/?fiction,book'
    ),
    new Book(
      'Some Book',
      'Anna',
      'Non-fiction',
      'https://source.unsplash.com/50x50/?book'
    ),
    new Book(
      'Fome Book',
      'Harry',
      'Non-fiction',
      'https://source.unsplash.com/50x50/?book'
    ),
    new Book(
      'Vome Book',
      'Molly',
      'Non-fiction',
      'https://source.unsplash.com/50x50/?book'
    ),
  ];

  // Read
  getBooks() {
    return this.myBooks.slice();
  }

  // Create
  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.next(this.myBooks.slice());
  }

  updateBook(idx: number, updatedBook: Book) {
    this.myBooks[idx] = updatedBook;
    this.bookListChanged.next(this.myBooks.slice());
  }

  // Delete
  removeBook(idx: number) {
    if (idx !== -1) {
      this.myBooks.splice(idx, 1);
      this.bookListChanged.next(this.myBooks.slice());
    }
  }

  getBook(idx: number) {
    return this.myBooks.slice()[idx];
  }
}
