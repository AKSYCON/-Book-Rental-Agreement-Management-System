import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { book } from '../../../models/book.model';
import { BookService } from '../../service/book.service';


@Component({
  selector: 'app-my-lented-book',
  templateUrl: './my-lented-book.component.html',
  styleUrl: './my-lented-book.component.css'
})
export class MyLentedBookComponent implements OnInit {
  LentBook: book = {
    id: 0,
    userid: 0,
    name: '',
    author: '',
    genre: '',
    rating: 0,
    available: '',
    description: '',
    lenderName: '',
    lentById: 0,
    currentlyBorrowById: 0,
  }

  arrBooks: book[] = [];
  constructor(public authService: AuthserviceService,private bookService: BookService){}

  ngOnInit(): void {
    this.getBookbyUser();
  }

  getBookbyUser()
  {
    this.bookService.getUserBookById(this.authService.UserDet()?.id).subscribe({next: (res)=>{
      console.log(res);
      this.arrBooks = res;
    }})
  }

}
