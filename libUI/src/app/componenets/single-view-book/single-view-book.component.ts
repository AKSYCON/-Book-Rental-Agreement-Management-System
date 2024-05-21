import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { BookService } from '../../service/book.service';
import { book } from '../../../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-view-book',
  templateUrl: './single-view-book.component.html',
  styleUrl: './single-view-book.component.css'
})
export class SingleViewBookComponent implements OnInit {
  books: book[] = [];
  bookDetails: book = {
    id: 0,
    userid: 0,
    name: '',
    author: '',
    genre: '',
    rating: 0,
    available: '',
    description: '',
    lentById: 0,
    currentlyBorrowById: 0,
    lenderName: ''
  }
  id=0;

  constructor(public authService: AuthserviceService,private bookService: BookService,private route: ActivatedRoute,private router: Router){}
  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');

        if(id){
          const id1 = parseInt(id);
          this.bookService.getBookById(id1).subscribe({
            next: (response) =>{
              this.bookDetails = response;
            }
          });
        }
      }
    })
  }

  save(book: book){
    if (book) {
      const borrowerUserId = this.authService.UserDet()?.id;
      this.bookService.borrowBook(book.id, borrowerUserId).subscribe({next: (res)=>{

      }});
    }
    this.router.navigateByUrl('allBook').then(() => {
      window.location.reload();
    });;
  }

}
