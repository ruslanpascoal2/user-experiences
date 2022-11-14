import { Pipe, PipeTransform } from '@angular/core';
import { KanbanTask } from '../models/kanban.models';

@Pipe({
  name: 'filterTasksByColumn'
})
export class FilterTasksByColumnPipe implements PipeTransform {

  transform(tasksUnfiltered: KanbanTask[], index: number): KanbanTask[] {
    return tasksUnfiltered.filter((_task: KanbanTask) => _task.columnIndex === index )
  }

}
