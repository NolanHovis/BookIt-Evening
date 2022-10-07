import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Output() currentBookSelected = new EventEmitter<Book>();
  myBooks: Book[] = [];

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();

    this.bookshelfService.bookListChanged.subscribe((books: Book[]) => {
      this.myBooks = books;
    });
  }

  onRemoveBook(idx: number) {
    this.bookshelfService.removeBook(idx);
  }
}
