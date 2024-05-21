import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBorrowBookComponent } from './my-borrow-book.component';

describe('MyBorrowBookComponent', () => {
  let component: MyBorrowBookComponent;
  let fixture: ComponentFixture<MyBorrowBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyBorrowBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyBorrowBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
