import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageDisplay = 'bookshelf';

  onNavigatePage(page: string) {
    console.log('app:', page);
    this.pageDisplay = page;
  }
}
