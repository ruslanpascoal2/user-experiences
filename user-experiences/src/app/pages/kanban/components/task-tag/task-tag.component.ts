import { Component, Input, OnInit } from '@angular/core';
import { TaskTag } from '../../models/kanban.models';

@Component({
  selector: 'app-task-tag',
  templateUrl: './task-tag.component.html',
  styleUrls: ['./task-tag.component.scss']
})
export class TaskTagComponent implements OnInit {

  @Input() tag!: TaskTag;
  constructor() { }

  ngOnInit(): void {
  }

}
