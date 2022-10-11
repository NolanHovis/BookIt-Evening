import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css'],
})
export class BookEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;
    });
  }
}
