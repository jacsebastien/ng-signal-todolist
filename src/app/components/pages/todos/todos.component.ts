import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ListComponent, CreateComponent],
  templateUrl: './todos.component.html',
})
export class TodosComponent {}
