import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { KanbanTaskCardComponent } from './kanban-task-card/kanban-task-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    KanbanBoardComponent,
    KanbanColumnComponent,
    KanbanTaskCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    KanbanBoardComponent,
    KanbanColumnComponent,
    KanbanTaskCardComponent
  ]
})
export class KanbanBoardModule { }
