import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import BookLayoutComponent from './layouts/book-layout/book-layout.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    BookLayoutComponent,

  ],
  templateUrl: './book.component.html',

})
export default class BookComponent {

}
