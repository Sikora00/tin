import { Component, OnInit} from '@angular/core';
import { EditFacade } from '@tin/debt/domain';

@Component({
  selector: 'debt-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    


    constructor(private editFacade: EditFacade) {
    }


    ngOnInit() {
    }

}

