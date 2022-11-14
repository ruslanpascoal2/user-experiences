import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BoardComponent } from './components/board/board.component';
import { TaskTagComponent } from './components/task-tag/task-tag.component';
import { FilterTasksByColumnPipe } from './pipes/filter-tasks-by-column.pipe';
import { TaskStatusComponent } from './components/task-status/task-status.component';


@NgModule({
  declarations: [
    KanbanComponent,
    TaskCardComponent,
    BoardColumnComponent,
    BoardComponent,
    TaskTagComponent,
    FilterTasksByColumnPipe,
    TaskStatusComponent,
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class KanbanModule { }
