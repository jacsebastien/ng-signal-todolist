import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TodosService } from '../../../../shared/services/todos.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
})
export class CreateComponent {
  private _fb: FormBuilder = inject(FormBuilder);
  private _todosSvc: TodosService = inject(TodosService);

  protected form = this._fb.group({
    title: '',
  });

  protected onSubmit(): void {
    const { title } = this.form.value;

    if (title) {
      this._todosSvc.create(title);
    }
  }
}
