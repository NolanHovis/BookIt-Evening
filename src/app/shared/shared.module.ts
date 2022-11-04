import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { BookComponent } from './book/book.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AlertComponent,
    NotificationComponent,
    DropdownDirective,
    BookComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    DropdownDirective,
    NotificationComponent,
    CommonModule,
    BookComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
