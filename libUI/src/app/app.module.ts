import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componenets/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componenets/login/login.component';
import { Page404Component } from './componenets/page404/page404.component';
import { AllBookComponent } from './componenets/all-book/all-book.component';
import { UnAuthorizeComponent } from './componenets/un-authorize/un-authorize.component';
import { AddBookComponent } from './componenets/add-book/add-book.component';
import { AllBooksComponent } from './componenets/all-books/all-books.component';
import { SingleViewBookComponent } from './componenets/single-view-book/single-view-book.component';
import { MyLentedBookComponent } from './componenets/my-lented-book/MyLentedBookComponent';
import { MyBorrowBookComponent } from './componenets/my-borrow-book/my-borrow-book.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    Page404Component,
    AllBookComponent,
    UnAuthorizeComponent,
    AddBookComponent,
    AllBooksComponent,
    SingleViewBookComponent,
    MyLentedBookComponent,
    MyBorrowBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
