import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componenets/login/login.component';
import { Page404Component } from './componenets/page404/page404.component';
import { AllBookComponent } from './componenets/all-book/all-book.component';
import { AuthGuard } from './service/auth.guard';
import { UnAuthorizeComponent } from './componenets/un-authorize/un-authorize.component';
import { AddBookComponent } from './componenets/add-book/add-book.component';
import { RegisterComponent } from './componenets/register/register.component';
import { AllBooksComponent } from './componenets/all-books/all-books.component';
import { SingleViewBookComponent } from './componenets/single-view-book/single-view-book.component';
import { MyLentedBookComponent } from './componenets/my-lented-book/MyLentedBookComponent';
import { MyBorrowBookComponent } from './componenets/my-borrow-book/my-borrow-book.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'allBook',
    component: AllBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allBooks',
    component: AllBooksComponent
  },
  {
    path: 'addBook',
    component: AddBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allBook/singleView/:id',
    component: SingleViewBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allBook/myLendBook/:id',
    component: MyLentedBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allBook/myBorrowBook/:id',
    component: MyBorrowBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'UnAuthorize',
    component: UnAuthorizeComponent
  },
  {
    path: '',
    redirectTo: 'allBooks',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
