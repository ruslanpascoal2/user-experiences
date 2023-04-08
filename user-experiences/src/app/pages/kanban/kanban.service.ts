import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Kanban } from './kanban.model';

const kanbanData: Kanban[] = [
  {
    id: 1,
    name: 'My Kanban Board',
    columns: [
      {
        id: 1,
        name: 'To Do',
        color: '#ff0000',
        order: 1,
        tasks: [
          {
            id: 1,
            title: 'Task 1',
            description: 'Do something',
            asignee: {
              id: 1,
              name: 'John Doe',
            },
            status: 'New',
          },
          {
            id: 2,
            title: 'Task 2',
            description: 'Do something else',
            asignee: {
              id: 2,
              name: 'Jane Doe',
            },
            status: 'New',
          },
        ],
      },
      {
        id: 2,
        name: 'In Progress',
        color: '#00ff00',
        order: 2,
        tasks: [
          {
            id: 3,
            title: 'Task 3',
            description: 'Do another thing',
            asignee: {
              id: 1,
              name: 'John Doe',
            },
            status: 'In Progress',
          },
        ],
      },
      {
        id: 3,
        name: 'Done',
        color: '#0000ff',
        order: 3,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  constructor() {}

  getKanbans(): Observable<Kanban[]> {
    return of(kanbanData);
  }
}
