import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  ActorPreview,
  ActorPreviewFacade,
  PreviewActorPresenterInterface,
} from '@tin/movie-database/client/application';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'movie-database-actor-preview',
  templateUrl: './actor-preview.component.html',
  styleUrls: ['./actor-preview.component.scss'],
  host: { class: 'feature-movie-database' },
  providers: [ActorPreviewFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorPreviewComponent
  implements OnInit, PreviewActorPresenterInterface {
  actor$: Observable<ActorPreview>;
  loading: boolean;
  showEdit = false;

  constructor(
    private actorPreviewFacade: ActorPreviewFacade,
    private activatedRoute: ActivatedRoute,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.actorPreviewFacade.init(
      this,
      +this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  displayActorData(data: Observable<ActorPreview>): void {
    this.actor$ = data;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }

  displayEditActor(): void {
    this.showEdit = true;
    this.cdR.markForCheck();
  }

  hideEditActor(): void {
    this.showEdit = false;
    this.cdR.markForCheck();
  }
}
