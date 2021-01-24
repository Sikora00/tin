import { Injectable, OnDestroy } from '@angular/core';
import { LoadSerialPreviewDataService } from './load-serial-preview-data.service';
import { SerialPreviewQuery } from './serial-preview.query';
import { MovieId } from '@tin/movie-database/domain';
import { SerialPreviewPresenter } from './serial-preview-presenter.interface';
import { Subscription } from 'rxjs';
import { AuthApiFacade } from '../../../../../../../../auth/client/application/src/lib/application/auth-api.facade';

@Injectable()
export class SerialPreviewFacade implements OnDestroy {
  private sub: Subscription;
  constructor(
    private previewData: LoadSerialPreviewDataService,
    private previewQuery: SerialPreviewQuery,
    private authApiFacade: AuthApiFacade
  ) {}

  async init(
    presenter: SerialPreviewPresenter,
    movieId: MovieId
  ): Promise<void> {
    presenter.displayLoading();
    await this.previewData.execute(movieId);
    presenter.displayPreview(this.previewQuery.serialPreview$);
    this.sub = this.authApiFacade.isUserLogged$.subscribe((isUserLogged) => {
      if (isUserLogged) {
        presenter.displayEditSerial();
      } else {
        presenter.hideEditSerial();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
