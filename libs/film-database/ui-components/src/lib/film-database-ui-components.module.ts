import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastMemberComponent } from './cast-member/cast-member.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CastMemberComponent],
  exports: [CastMemberComponent],
})
export class FilmDatabaseUiComponentsModule {}
