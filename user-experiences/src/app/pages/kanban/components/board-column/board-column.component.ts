import { Component, Input, OnInit } from '@angular/core';
import { KanbanColumn, KanbanTask } from '../../models/kanban.models';

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent implements OnInit {


  @Input() column!: KanbanColumn;

  constructor() { }

  ngOnInit(): void {
  }

}
