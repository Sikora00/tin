import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilmListFacade, loadFilm } from '@tin/film-database/domain';

@Component({
  selector: 'film-database-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'feature-host' },
})
export class FilmListComponent implements OnInit {
  filmList$ = this.filmListFacade.filmList$;

  constructor(private filmListFacade: FilmListFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.filmListFacade.dispatch(loadFilm());
  }
}
