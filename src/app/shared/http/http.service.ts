import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from '../book/book.model';
import { exhaustMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  firebaseRootURL =
    'https://bookitnight-default-rtdb.firebaseio.com/books.json';

  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService,
    private authService: AuthService
  ) { }

  saveDataToFirebase() {
    const books = this.bookshelfService.getBooks();

    this.http.put(this.firebaseRootURL, books).subscribe((res) => {
      console.log('Firebase Put Req:', res);
    });
  }

  fetchDataFromFirebase() {
    return this.authService.currentUser.pipe(
      take(1),
      exhaustMap((user: User) => {
        console.log(user);
        return this.http.get(this.firebaseRootURL, {
          params: new HttpParams().set('auth', user.token)
        }).pipe(
          tap((res: Book[]) => {
            this.bookshelfService.setBooks(res);
          })
        );

      })
    )

    // return this.http.get(this.firebaseRootURL, {}).pipe(
    //   tap((res: Book[]) => {
    //     this.bookshelfService.setBooks(res);
    //   })
    // );
  }
}
