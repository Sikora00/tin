import {Injectable} from '@angular/core';
import {LoadSerialPreviewDataService} from './load-serial-preview-data.service';
import {SerialPreviewQuery} from './serial-preview.query';
import {MovieId} from '@tin/movie-database/domain';
import {SerialPreviewPresenter} from "./serial-preview-presenter.interface";

@Injectable()
export class SerialPreviewFacade {
  constructor(
    private previewData: LoadSerialPreviewDataService,
    private previewQuery: SerialPreviewQuery
  ) {}

  async init(
    presenter: SerialPreviewPresenter,
    movieId: MovieId
  ): Promise<void> {
    presenter.displayLoading();
    await this.previewData.execute(movieId);
    presenter.displayPreview(this.previewQuery.serialPreview$);
  }
}
