import { Component, OnInit } from '@angular/core';
import { concatMap, filter, forkJoin, map, Observable, tap } from 'rxjs';
import { KanbanBoard, KanbanTask } from './models/kanban.models';
import { KanbanService } from './services/kanban.service';

const selectedBoardId = "69c55ae0-600e-4672-a3c2-de08b8c0ce54";

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  
  board$!: Observable<KanbanBoard>;
  tasks$!: Observable<any>;
  
  data$!: Observable<any>;

  constructor(private kanbanService: KanbanService) {}

  ngOnInit(): void {

    this.board$ = this.kanbanService.getBoard(selectedBoardId)
    this.tasks$ = this.kanbanService.getTasks(selectedBoardId);
    
    this.data$ = forkJoin(
      {
        board: this.board$,
        tasks: this.tasks$
      }
    )
  }

}
