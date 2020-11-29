import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListFacade, loadDebt } from '@tin/debt/domain';

@Component({
  selector: 'debt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  debtList$ = this.listFacade.debtList$;

  constructor(private listFacade: ListFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.listFacade.dispatch(loadDebt());
  }
}
