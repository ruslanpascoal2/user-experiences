import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanComponent } from './kanban.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KanbanBoardModule } from 'src/app/components/kanban-board/kanban-board.module';


@NgModule({
  declarations: [
    KanbanComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    KanbanBoardModule
  ]
})
export class KanbanModule { }
