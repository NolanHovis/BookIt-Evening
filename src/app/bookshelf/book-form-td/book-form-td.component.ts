import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-td',
  templateUrl: './book-form-td.component.html',
  styleUrls: ['./book-form-td.component.css'],
})
export class BookFormTdComponent implements OnInit {
  formHasBeenSubmitted = false;
  bookDetails = {
    title: '',
    author: '',
    genre: '',
  };
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    // console.log('submitted', form);
    this.formHasBeenSubmitted = true;

    this.bookDetails.title = form.value.title;
    this.bookDetails.author = form.value.author;
    this.bookDetails.genre = form.value.genre;

    form.reset();
  }
}
