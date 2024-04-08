import { Component } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  constructor(public todosService: TodosService) {}
  ngOnInit(): void {}
  onChange(id: number) {
    this.todosService.onToggle(id)
  }
  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }
}
