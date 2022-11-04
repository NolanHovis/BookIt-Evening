import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth/auth-guard.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfResolverService } from './bookshelf-resolver.service';
import { BookshelfComponent } from './bookshelf.component';

const routes: Routes = [
  {
    path: '',
    component: BookshelfComponent,
    canActivate: [AuthGuard],
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookshelfRoutingModule {}
