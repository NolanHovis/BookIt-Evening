import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from '../bookshelf/bookshelf.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit, OnDestroy {
  private bookSelectedSub: Subscription;
  alert: string;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.bookSelectedSub = this.bookshelfService.bookSelected.subscribe(
      (book) => {
        this.alert = `Successfully added book: ${book.title} by ${book.author} to your personal bookshelf!`;
        setTimeout(() => {
          this.handleCloseModal();
        }, 5000);
      }
    );
  }

  handleCloseModal() {
    this.alert = null;
  }

  ngOnDestroy(): void {
    this.bookSelectedSub.unsubscribe();
  }
}
