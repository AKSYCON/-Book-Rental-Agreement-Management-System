import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthorizeComponent } from './un-authorize.component';

describe('UnAuthorizeComponent', () => {
  let component: UnAuthorizeComponent;
  let fixture: ComponentFixture<UnAuthorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnAuthorizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
