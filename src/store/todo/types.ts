export interface ITodo {
  createdAt: string;
  text: string;
  title: string;
  isCompleted: boolean;
}

export enum SortOptionsEnum {
  Oldest = "Oldest first",
  Newest = "Newest first",
  AZ = "A-Z",
  ZA = "Z-A",
}

export interface TodoState {
  searchQuery: string;
  todos: ITodo[];
}
