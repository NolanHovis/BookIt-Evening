import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  @Output() currentBookSelected = new EventEmitter<Book>();
  myBooks: Book[] = [];
  sortField = 'author';
  sortSwitcher = true;
  private bookListSub: Subscription;

  constructor(
    private bookshelfService: BookshelfService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks();

    this.bookListSub = this.bookshelfService.bookListChanged.subscribe(
      (books: Book[]) => {
        this.myBooks = books;
      }
    );
  }

  onRemoveBook(idx: number) {
    this.bookshelfService.removeBook(idx);
  }

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSort() {
    this.sortSwitcher = !this.sortSwitcher;

    if (this.sortSwitcher) {
      this.sortField = 'author';
    } else {
      this.sortField = 'title';
    }
  }

  ngOnDestroy(): void {
    this.bookListSub.unsubscribe();
  }
}
