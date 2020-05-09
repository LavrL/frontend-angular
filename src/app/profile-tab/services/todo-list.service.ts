import { Injectable } from '@angular/core';
import { ToDoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: ToDoItem[] = [
    { title: 'email1@inbox.com' },
    { title: 'email2@inbox.com' }
  ];

  getTodoList() {
    return this.todoList;
  }

  addItem(item: ToDoItem) {
    this.todoList.push(item);
  }
  deleteItem(item: ToDoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }
}
