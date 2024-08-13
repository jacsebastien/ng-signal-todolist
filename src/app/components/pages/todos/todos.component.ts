import { Component, inject, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { TodosService } from '../../../shared/services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ListComponent, CreateComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  private _todosSvc: TodosService = inject(TodosService);

  ngOnInit(): void {
    this._todosSvc.getList().subscribe();
  }
}
