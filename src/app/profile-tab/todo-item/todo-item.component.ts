import { Component, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { ToDoItem } from '../interfaces/todo-item';
//import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-todo-item',
  template: `
  <input #textInput type="text"
  [ngStyle]="{ display: isActive ? 'inline-block' : 'none' }" >
  <label [ngStyle]="{display: isActive ? 'none' : 'inline-block'}">{{ item.title }}</label>
  <button type="button" class="close" aria-label="Close" (click)="removeItem()">
    <span aria-hidden="true">&times;</span>
  </button>`,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item: ToDoItem;
  @Output() delete: EventEmitter<ToDoItem> = new EventEmitter();
  @ViewChild('textInput', { static: true }) textInput: ElementRef;

  isActive = false;
  constructor() { }

  removeItem() {
    this.delete.emit(this.item);
  }

}
