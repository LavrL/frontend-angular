import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { ToDoItem } from '../interfaces/todo-item';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-manager',
  template: `
  <ul>
    <li *ngFor="let todoItem of todoList">
      <app-todo-item [item]="todoItem" (delete)="removeItem($event)"></app-todo-item>
    </li>
  </ul>
  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: ToDoItem[] = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
    console.log(this.todoList);
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item: ToDoItem) {
    this.todoListService.deleteItem(item);
  }

}
