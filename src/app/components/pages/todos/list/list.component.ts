import { Component, inject, input } from '@angular/core';
import { ITodo } from '../../../../shared/interfaces/todo.interface';
import { DatePipe } from '@angular/common';
import { TodosService } from '../../../../shared/services/todos.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  title = input.required<string>();
  todos = input.required<ITodo[]>();

  private _todosSvc: TodosService = inject(TodosService);

  onChangeState(todo: ITodo): void {
    this._todosSvc.changeState(todo.id, !todo.isDone);
  }
}
