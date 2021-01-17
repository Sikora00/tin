import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tin-movie-database-navbar',
  templateUrl: './movie-database-navbar.component.html',
  styleUrls: ['./movie-database-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDatabaseNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
