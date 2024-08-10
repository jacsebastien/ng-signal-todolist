import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { TodosService } from '../../../shared/services/todos.service';
import { ITodo } from '../../../shared/interfaces/todo.interface';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ListComponent, CreateComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  private _todosSvc: TodosService = inject(TodosService);

  protected todo: Signal<ITodo[]> = computed(() =>
    this._todosSvc.todos().filter((t) => !t.isDone)
  );
  protected done: Signal<ITodo[]> = computed(() =>
    this._todosSvc.todos().filter((t) => t.isDone)
  );

  ngOnInit(): void {
    this._todosSvc.getList().subscribe();
  }
}
