import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListManagerComponent } from './list-manager.component';
import { ListManagerModule } from './list-manager.module';
import { TodoListService } from '../services/todo-list.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ListManagerComponent', () => {
  let component: ListManagerComponent;
  let fixture: ComponentFixture<ListManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService],
      imports: [FormsModule,
        ReactiveFormsModule,
        ListManagerModule,
        CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let listManagerComponent: ListManagerComponent;
    let todoListService: TodoListService;
    listManagerComponent = new ListManagerComponent(todoListService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should add new item', () => {
    component.addItem('item1');
    expect(component.todoList.length).toEqual(3);
  });

  it('should remove item', () => {
    component.removeItem({ title: 'email1@inbox.com' });
    expect(component.todoList.length).toEqual(1);
  });

});
