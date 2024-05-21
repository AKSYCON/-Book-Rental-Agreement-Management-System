import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'https://localhost:44340/api/'
  constructor(private http: HttpClient) { }

  addBook(book: any, userId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Book/AddBook?userId=${userId}`, book,{});
  }
  getAllBooks():Observable<any>{
    return this.http.get<any>(this.apiUrl + 'Book');
  }
  getBookById(id: number):Observable<any>{
    return this.http.get<any>(this.apiUrl + 'Book/' + id);
  }
  getUserBookById(id: number):Observable<any>{
    return this.http.get<any[]>(this.apiUrl + 'Book/BookUser/' + id);
  }
  getBorrowBookById(id: number):Observable<any>{
    return this.http.get<any[]>(this.apiUrl + 'Book/Borrow/' + id);
  }
  borrowBook(bookId: number, borrowerUserId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Book/BorrowBook?bookId=${bookId}&borrowerUserId=${borrowerUserId}`, {});
  }
}
