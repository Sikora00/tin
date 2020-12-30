import { Component, OnInit } from '@angular/core';
import {
  Actor,
  ActorPreview,
  ActorPreviewFacade,
} from '@tin/movie-database/domain';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PreviewActorCommand } from '../../../domain/src/lib/application/commands/preview-actor/preview-actor.command';

@Component({
  selector: 'movie-database-actor-preview',
  templateUrl: './actor-preview.component.html',
  styleUrls: ['./actor-preview.component.scss'],
  host: { class: 'feature-host' },
})
export class ActorPreviewComponent implements OnInit {
  actor$: Observable<ActorPreview> = this.actorPreviewFacade.selectedActor$;

  constructor(
    private actorPreviewFacade: ActorPreviewFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actorPreviewFacade.previewActor(
      new PreviewActorCommand(+this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }
}
