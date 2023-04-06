export interface Kanban {
  id: number;
  name: string;
  columns?: KanbanColumn[];
}

export interface KanbanColumn {
  id: number;
  name: string;
  color: string; //must be a hex code color here
  order: number;
  tasks?: KanbanTask[];
}

export interface KanbanTask {
  id: number;
  title: string;
  description: string;
  asignee: KanbanUser;
  status: "New" | "In Progress" | "Done";
}

export interface KanbanUser {
  id: number;
  name: string; //this property should be a full name of a person
}
