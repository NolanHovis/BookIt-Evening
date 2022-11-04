import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortBooksPipe } from '../shared/pipes/sortBooks.pipe';
import { SharedModule } from '../shared/shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { BookshelfComponent } from './bookshelf.component';

@NgModule({
  declarations: [
    BookshelfComponent,
    BookListComponent,
    BookDetailsComponent,
    BookshelfHomeComponent,
    BookEditorComponent,
    SortBooksPipe,
  ],
  imports: [SharedModule, BookshelfRoutingModule],
})
export class BookshelfModule {}
