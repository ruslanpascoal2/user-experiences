import { Component, Input, OnInit } from '@angular/core';
import { KanbanTask } from '../../models/kanban.models';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task!: KanbanTask;

  constructor() { }

  ngOnInit(): void {
  }

}
