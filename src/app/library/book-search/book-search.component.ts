import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private libraryService: LibraryService
  ) {}

  ngOnInit(): void {}

  onFetchBooks(searchInput: string) {
    this.libraryService.fetchBooks(searchInput);
  }
}
