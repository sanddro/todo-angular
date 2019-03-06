import {Component, OnInit} from '@angular/core';
import Todo from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
  }

  ngOnInit() {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos'));
    this.todos = todosFromStorage || [];
  }

  updateTodosInStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onAddTodo(text: string) {
    const newId = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
    this.todos.push({id: newId, text, completed: false});
    this.updateTodosInStorage();

  }

  onRemoveTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateTodosInStorage();
  }

}
