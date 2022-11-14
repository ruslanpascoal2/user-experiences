export interface KanbanBoard{
    id?: string,
    columns?: KanbanColumn[]
}

export interface KanbanTask{
    id?: string;
    boardId?: string;
    columnIndex?: number;
    name: string,
    description: string,
    status: TaskStatus,
    blocked?: boolean,
    tags?: TaskTag[]
}

export interface KanbanColumn{
    name: string;
    index: number;
}

export interface TaskTag{
    text: string,
    color: string
}

export enum TaskStatus{
    NEW,
    IN_PROGRESS,
    CLOSED,
}