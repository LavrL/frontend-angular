import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemModule } from '../todo-item/todo-item.module';

import { ListManagerComponent } from './list-manager.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListManagerComponent, TodoItemComponent, InputButtonUnitComponent],
  exports: [ListManagerComponent]
})
export class ListManagerModule {}
