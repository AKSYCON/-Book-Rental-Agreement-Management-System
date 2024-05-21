import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookComponent } from './all-book.component';

describe('AllBookComponent', () => {
  let component: AllBookComponent;
  let fixture: ComponentFixture<AllBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
