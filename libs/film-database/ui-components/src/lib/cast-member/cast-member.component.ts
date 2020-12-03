import { Component, Input } from '@angular/core';
import { CastMember } from '@tin/film-database/domain';

@Component({
  selector: 'film-database-cast-member',
  templateUrl: './cast-member.component.html',
  styleUrls: ['./cast-member.component.scss'],
})
export class CastMemberComponent {
  @Input()
  castMember: CastMember;
}
