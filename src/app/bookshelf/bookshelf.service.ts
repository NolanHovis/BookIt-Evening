import { Injectable, EventEmitter } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new EventEmitter<Book>();
  bookListChanged = new EventEmitter<Book[]>();
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
      'Tom',
      'Non-fiction',
      'https://source.unsplash.com/50x50/?book'
    ),
    new Book(
      'Some Book',
      'Tom',
      'Non-fiction',
      'https://source.unsplash.com/50x50/?book'
    ),
    new Book(
      'Some Book',
      'Tom',
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
    this.bookListChanged.emit(this.myBooks.slice());
  }

  // Delete
  removeBook(idx: number) {
    if (idx !== -1) {
      this.myBooks.splice(idx, 1);
      this.bookListChanged.emit(this.myBooks.slice());
    }
  }
}
