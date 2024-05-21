import { Component, OnInit } from '@angular/core';
import { book } from '../../../models/book.model';
import { BookService } from '../../service/book.service';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {
  newBook: book = {
    id: 0,
    userid: 0,
    name: '',
    rating: 0,
    author: '',
    genre: '',
    available: '',
    description: '',
    lentById: 0,
    currentlyBorrowById: 0,
    lenderName: ''
  };
  display = '';
  constructor(private bookService: BookService,public authService: AuthserviceService,private router: Router) { }
  ngOnInit(): void {
    this.getUserDetails();
  }

  userId = 0;
  lentId = 0;
  getUserDetails() {
    this.authService.getUser(this.authService.UserDet()?.id)
      .subscribe(response => {
          
          this.userId = response.userId
          this.lentId = response.userId
          console.log(this.userId)
        },
        error => {
          console.error('Error fetching user details:', error);
          
        }
      )
  }

  addBook() {
    this.newBook.userid = this.userId; 
    this.bookService.addBook(this.newBook, this.userId)
      .subscribe(
        ({
          next: (res)=>{
            this.router.navigate(['allBook'])
          }
        })
      );
      
      
  }
}
