import { Component, OnInit } from '@angular/core';
import { Kanban } from './kanban.model';
import { KanbanService } from './kanban.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  kanbans: Kanban[] = [];
  constructor(private kanbanService: KanbanService) {}

  ngOnInit(): void {
    this.kanbanService
      .getKanbans()
      .pipe(take(1))
      .subscribe((kanbans: Kanban[]) => (this.kanbans = kanbans));
  }
}
