import { Component, OnInit } from '@angular/core';
import { BookService } from './products-list.component.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  books: any
  constructor(private bookService: BookService) {
    this.bookService = bookService
  }

  ngOnInit(): void {
    this.getBooks()
  }


  getBooks(){
    this.bookService.getBook().subscribe({
      next: resul => {
        this.books = resul
        console.log(resul)
      }
    })
  }
}
