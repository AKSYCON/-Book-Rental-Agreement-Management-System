import { Component, OnInit } from '@angular/core';
import { book } from '../../../models/book.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit {
  books: book[] = [];
  search = '';
  filterBooks: book[] = [];
  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({next: (res)=>{
      this.books = res;
      this.filterBooks = res;
    }})
  }

  updateFilteredBooks() {
    this.books = this.filterBooks.filter(book =>
        book.name.toLowerCase().includes(this.search.toLowerCase()) ||
        book.author.toLowerCase().includes(this.search.toLowerCase()) ||
        book.genre.toLowerCase().includes(this.search.toLowerCase())
    );

    
}
onSearchInputChange() {
  
  this.updateFilteredBooks();
}
}
