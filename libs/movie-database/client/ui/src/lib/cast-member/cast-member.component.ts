import { Component, Input } from '@angular/core';
import { CastMemberWithActorReadModel } from '@tin/movie-database/domain';

@Component({
  selector: 'movie-database-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss'],
})
export class CastMemberComponent {
  @Input()
  castMember: CastMemberWithActorReadModel;
}
