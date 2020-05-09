//import { TodoItemModule } from '../todo-item/todo-item.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { ListManagerComponent } from './list-manager.component';
import { NgModule } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ListManagerComponent, TodoItemComponent, InputButtonUnitComponent],
  exports: [ListManagerComponent]
})
export class ListManagerModule { }
