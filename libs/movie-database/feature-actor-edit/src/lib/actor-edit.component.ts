import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  ActorEditFacade,
  ActorEditPresenter,
  ActorId,
  EditActorForm,
} from '@tin/movie-database/domain';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-database-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.scss'],
  host: { class: 'feature-host' },
  providers: [ActorEditFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorEditComponent implements OnInit, ActorEditPresenter {
  actorId: ActorId = +this.activatedRoute.snapshot.paramMap.get('id');
  loading: boolean;
  form: EditActorForm;
  constructor(
    private actorEditFacade: ActorEditFacade,
    private activatedRoute: ActivatedRoute,
    private cdR: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.actorEditFacade.init(this, this.actorId);
  }

  onSubmit(): void {
    this.actorEditFacade.onFormSubmit(this.actorId, this.form.value);
  }

  displayForm(form: EditActorForm): void {
    this.form = form;
    this.loading = false;
    this.cdR.markForCheck();
  }

  displayLoading(): void {
    this.loading = true;
  }
}
