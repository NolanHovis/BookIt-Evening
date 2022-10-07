import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();

  allBooks: Book[] = [
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

  getBooks() {
    return this.allBooks.slice();
  }
}
