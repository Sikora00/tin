import { Component, Input } from '@angular/core';
import { Actor, CastMember } from '@tin/movie-database/domain';

interface UiCastMember extends Omit<CastMember, 'actor'> {
  actor: Actor;
}

@Component({
  selector: 'movie-database-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss'],
})
export class CastMemberComponent {
  @Input()
  castMember: UiCastMember;
}
