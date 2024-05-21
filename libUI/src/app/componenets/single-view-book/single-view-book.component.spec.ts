import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewBookComponent } from './single-view-book.component';

describe('SingleViewBookComponent', () => {
  let component: SingleViewBookComponent;
  let fixture: ComponentFixture<SingleViewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleViewBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleViewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
