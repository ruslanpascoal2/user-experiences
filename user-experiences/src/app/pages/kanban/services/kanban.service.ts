import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { KanbanBoard } from '../models/kanban.models';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(private http: HttpClient) { }

  getBoard(boardId: string): Observable<KanbanBoard>{
    return this.http.get<KanbanBoard>(`${environment.baseURL}/boards/${boardId}`)
    .pipe(delay(1000));
  }

  getTasks(boardId: string): Observable<KanbanBoard[]>{
    return this.http.get<KanbanBoard[]>(`${environment.baseURL}/tasks?boardId=${boardId}`);
  }

}
