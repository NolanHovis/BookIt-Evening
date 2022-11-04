import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();
  private myBooks: Book[] = [];

  // Read
  getBooks() {
    return this.myBooks.slice();
  }

  // Create
  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookSelected.next(book);
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

  setBooks(books: Book[]) {
    console.log('Books: ', books);

    this.myBooks = books || [];

    this.bookListChanged.next(this.myBooks.slice());
  }
}
