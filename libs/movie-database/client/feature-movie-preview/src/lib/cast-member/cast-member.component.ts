import { Component, Input } from '@angular/core';
import { MoviePreviewActor } from '@tin/movie-database/client/application';

@Component({
  selector: 'movie-database-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss'],
})
export class CastMemberComponent {
  @Input()
  castMember: MoviePreviewActor;
}
