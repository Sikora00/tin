import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastMemberComponent } from './cast-member/cast-member.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CastMemberComponent],
  exports: [CastMemberComponent],
})
export class FilmDatabaseUiComponentsModule {}
