import { Component, Input, OnInit } from '@angular/core';
import { KanbanTask } from 'src/app/pages/kanban/kanban.model';

@Component({
  selector: 'app-kanban-task-card',
  templateUrl: './kanban-task-card.component.html',
  styleUrls: ['./kanban-task-card.component.scss']
})
export class KanbanTaskCardComponent implements OnInit {

  @Input() task!:KanbanTask;

  constructor() { }

  ngOnInit(): void {
  }

}
