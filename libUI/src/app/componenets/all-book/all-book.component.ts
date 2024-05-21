import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';
import { book } from '../../../models/book.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrl: './all-book.component.css'
})
export class AllBookComponent implements OnInit {
  tokens = -1;
  books: book[] = [];
  search = '';
  filterBooks: book[] = [];
  constructor(public authService: AuthserviceService,private router: Router,private bookService: BookService){}
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({next: (res)=>{
      this.books = res;
      this.filterBooks = res;
    }})

    this.getUserDetails();
  }
  logOut(){
    this.authService.removeToken();
    this.router.navigateByUrl('login');
  }

  getUserDetails() {
    this.authService.getUser(this.authService.UserDet()?.id)
      .subscribe(
        response => {
          console.log(response);
          this.tokens = response.token
        },
        error => {
          console.error('Error fetching user details:', error);
          
        }
      );
  }

  save(book: book){
    if (book) {
      const borrowerUserId = this.authService.UserDet()?.id;
      this.bookService.borrowBook(book.id, borrowerUserId).subscribe({next: (res)=>{

      }});
    }
    window.location.reload();
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
