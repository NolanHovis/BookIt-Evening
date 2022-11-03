import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  private bookListSub: Subscription;

  constructor(private bsService: BookshelfService) {}

  ngOnInit(): void {
    this.bookListSub = this.bsService.bookListChanged.subscribe((data) => {
      console.log(data);
      let book = data[data.length - 1];
      alert(
        `title: ${book.title} \n author: ${book.author} \n Was added to your bookshelf!`
      );
    });
  }

  ngOnDestroy(): void {
    this.bookListSub.unsubscribe();
  }
}
