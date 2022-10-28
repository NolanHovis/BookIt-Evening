import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookEditorComponent } from './bookshelf/book-editor/book-editor.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfResolverService } from './bookshelf/bookshelf-resolver.service';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    children: [
      { path: '', component: BookshelfHomeComponent },
      { path: 'new', component: BookEditorComponent },
      {
        path: ':id',
        component: BookDetailsComponent,
        resolve: [BookshelfResolverService],
      },
      {
        path: ':id/edit',
        component: BookEditorComponent,
        resolve: [BookshelfResolverService],
      },
    ],
  },
  { path: 'library', component: LibraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
