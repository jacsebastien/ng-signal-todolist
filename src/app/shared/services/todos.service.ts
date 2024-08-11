import { HttpClient } from '@angular/common/http';
import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private _todos: WritableSignal<ITodo[]> = signal([]);
  readonly todos: Signal<ITodo[]> = computed(() => this._todos());

  constructor(private http: HttpClient) {}

  getList(): Observable<void> {
    return this.http.get<ITodo[]>('/data/todos.json').pipe(
      map((todos: ITodo[]) => {
        this._todos.set(
          todos.map((t) => ({ ...t, creationDate: new Date(t.creationDate) }))
        );
      })
    );
  }

  create(todoTitle: string): void {
    const lastTodo: ITodo = this._todos()
      .sort((a, b) => a.id - b.id)
      .slice(-1)[0];

    const newTodo: ITodo = {
      id: lastTodo.id + 1,
      title: todoTitle,
      isDone: false,
      creationDate: new Date(),
    };

    this._todos.update((todos) => [...todos, newTodo]);
  }

  changeState(todoId: number, isDone: boolean): void {
    this._todos.update((todos) =>
      todos.map((t) => (t.id === todoId ? { ...t, isDone } : t))
    );
  }
}
