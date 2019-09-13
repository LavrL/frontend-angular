import { Injectable, Inject } from '@angular/core';
import { ToDoItem } from '../interfaces/todo-item';

// const defaultTodoList = [
//   {
//     title: 'Install Windows 7'
//   }
// ];

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
    console.log('todoList = ' + this.todoList);
  }
  deleteItem(item: ToDoItem) {
    const index = this.todoList.indexOf(item);
    console.log('index = ' + index);
    console.log('todoList = ' + this.todoList);
    this.todoList.splice(index, 1);
  }
}

