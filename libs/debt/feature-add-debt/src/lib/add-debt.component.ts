import { Component, OnInit } from '@angular/core';
import { AddDebtFacade } from '@tin/debt/domain';

@Component({
  selector: 'debt-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.scss'],
})
export class AddDebtComponent implements OnInit {
  constructor(private addDebtFacade: AddDebtFacade) {}

  ngOnInit() {}
}
