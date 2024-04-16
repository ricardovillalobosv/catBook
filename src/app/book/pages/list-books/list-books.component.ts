import { Component, OnInit, inject} from '@angular/core';

import { LoaderComponent } from '../../components/loader/loader.component';
import { CardBookComponent } from '../../components/card-book/card-book.component';
import { Item} from '../../interfaces/response-books-volumen';
import { CommonModule } from '@angular/common';
import { ServiceBook } from '../../services/service-book.service';
import BookLayoutComponent from '../../layouts/book-layout/book-layout.component';
import SearchComponent from '../../components/search/search.component';


@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    CardBookComponent,

    SearchComponent
  ],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export default class ListBooksComponent implements OnInit {

  public books:Item[]=[]
  public itemValor:string='Matematicas'

  private serviceBook=inject(ServiceBook)

  constructor(){

  }
  ngOnInit(): void {

  }

  getBooks(item:string){
    this.serviceBook.getBooksForVolumen(item)
    .subscribe(books => {
      this.books = books.items
      console.log(this.books)
      })

  }


}
