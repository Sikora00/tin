import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatabaseNavbarComponent } from './movie-database-navbar.component';

describe('MovieDatabaseNavbarComponent', () => {
  let component: MovieDatabaseNavbarComponent;
  let fixture: ComponentFixture<MovieDatabaseNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDatabaseNavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDatabaseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
