import { Component, Input, OnInit } from '@angular/core';
import { KanbanColumn } from 'src/app/pages/kanban/kanban.model';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {

  @Input() column!: KanbanColumn;
  constructor() { }

  ngOnInit(): void {
  }

}
