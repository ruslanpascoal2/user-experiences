import { Component, Input, OnInit } from '@angular/core';
import { Kanban } from 'src/app/pages/kanban/kanban.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  @Input() kanban!: Kanban;
  constructor() { }

  ngOnInit(): void {
  }

}
