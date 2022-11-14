import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { KanbanColumn } from '../../models/kanban.models';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent implements OnInit {


  @Input() column!: KanbanColumn;

  @ContentChildren(TaskCardComponent) content!: QueryList<TaskCardComponent>;

  constructor() { }

  ngOnInit(): void {
    
  }

}
