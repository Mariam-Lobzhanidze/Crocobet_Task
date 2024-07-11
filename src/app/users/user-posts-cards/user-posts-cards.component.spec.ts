import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsCardsComponent } from './user-posts-cards.component';

describe('UserPostsCardsComponent', () => {
  let component: UserPostsCardsComponent;
  let fixture: ComponentFixture<UserPostsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPostsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPostsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
