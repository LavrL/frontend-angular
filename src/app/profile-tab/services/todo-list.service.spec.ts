import { ToDoItem } from '../interfaces/todo-item';
import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let serviceTodo: TodoListService;

  beforeEach(() => {
    serviceTodo = new TodoListService();
    let todoList: ToDoItem[] = [
      { title: 'email1@inbox.com' },
      { title: 'email2@inbox.com' }
    ];
  })

  it('getTodoList should return default todoList', () => {
    expect(serviceTodo.getTodoList()).toEqual(serviceTodo.todoList);
  });

  it('should add new item in addItem', () => {
    serviceTodo.addItem({ title: 'email3@inbox.com' });

    expect(serviceTodo.todoList.length).toEqual(3);
    expect(serviceTodo.todoList).toEqual([
      { title: 'email1@inbox.com' },
      { title: 'email2@inbox.com' },
      { title: 'email3@inbox.com' }]);
  });

  it('should delete item from todoList', () => {
    serviceTodo.deleteItem({ title: 'email2@inbox.com' });
    expect(serviceTodo.todoList.length).toEqual(1);
  });

});
