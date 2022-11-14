import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../../models/kanban.models';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss'],
})
export class TaskStatusComponent implements OnInit {
  _status: string = 'new';
  _label: string = "New"

  @Input() set status(code: TaskStatus) {
    switch (code) {
      case TaskStatus.CLOSED:
        this._status = 'closed';
        this._label = 'Closed';
        break;
      case TaskStatus.IN_PROGRESS:
        this._status = 'progress';
        this._label = 'In progress';
        break;
      case TaskStatus.NEW:
        this._status = 'new';
        this._label = 'New';
        break;

      default:
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
