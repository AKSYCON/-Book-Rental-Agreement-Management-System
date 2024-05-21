import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { BookService } from '../../service/book.service';
import { book } from '../../../models/book.model';

@Component({
  selector: 'app-my-borrow-book',
  templateUrl: './my-borrow-book.component.html',
  styleUrl: './my-borrow-book.component.css'
})
export class MyBorrowBookComponent implements OnInit {

  borrBook: book[] = [];
  constructor(public authService: AuthserviceService,private bookService: BookService){}
  ngOnInit(): void {
    this.getBookByBorrowId();
  }

  getBookByBorrowId(){
    this.bookService.getBorrowBookById(this.authService.UserDet()?.id).subscribe({next: (res)=>{
      this.borrBook = res;
    }})
  }
}
