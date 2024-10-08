import { Component, computed, inject, input, Signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITodo } from '../../../../shared/interfaces/todo.interface';
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
  isDone = input.required<boolean>();

  private _todosSvc: TodosService = inject(TodosService);

  protected todos: Signal<ITodo[]> = computed(() =>
    this._todosSvc.todos().filter((t) => t.isDone === this.isDone())
  );

  onChangeState(todo: ITodo): void {
    this._todosSvc.changeState(todo.id, !todo.isDone);
  }
}
