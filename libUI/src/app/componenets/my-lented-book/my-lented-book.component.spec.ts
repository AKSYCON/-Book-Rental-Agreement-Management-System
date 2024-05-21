import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLentedBookComponent } from './MyLentedBookComponent';

describe('MyLentedBookComponent', () => {
  let component: MyLentedBookComponent;
  let fixture: ComponentFixture<MyLentedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyLentedBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLentedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
