import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookListChanged = new Subject<Book[]>();

  constructor(private http: HttpClient) {}

  allBooks: Book[] = [];

  getBooks() {
    return this.allBooks.slice();
  }

  fetchBooks(searchInput: string) {
    const formattedQuery = searchInput.split(' ').join('+').toLowerCase();

    console.log('Formatted Input:', formattedQuery);

    this.http
      .get(`http://openlibrary.org/search.json?q=${formattedQuery}`)
      .subscribe((res) => {
        // console.log('API GET REQ RESPONSE:', res);
        this.allBooks = [];
        this.saveBooks(res);
      });
  }

  saveBooks(books) {
    books.docs.map((book) => {
      // console.log('Book:', book);

      const { title, author_name, first_publish_year, isbn } = book;

      const newBook = new Book(
        title,
        author_name ? author_name[0] : '',
        'https://tse2.mm.bing.net/th?id=OIP.I6LGwie40Vw4K8gmV52MKwHaLc&pid=Api&P=0&w=300&h=300',
        '',
        0,
        first_publish_year,
        isbn ? isbn[0] : ''
      );
      // console.log('newBook: ', newBook);
      this.allBooks.push(newBook);
    });

    // console.log('All Books: ', this.allBooks);
    this.bookListChanged.next(this.allBooks.slice());
  }
}
