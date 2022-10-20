import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() idx: number;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {}

  onBookSelected() {
    this.bookshelfService.bookSelected.next(this.book);
  }
}
