import { Component, OnInit } from '@angular/core';
import { PreviewFacade } from '@tin/debt/domain';

@Component({
  selector: 'debt-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  constructor(private previewFacade: PreviewFacade) {}

  ngOnInit() {}
}
