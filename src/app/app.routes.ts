import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TodosComponent } from './components/pages/todos/todos.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'list',
    title: 'List',
    component: TodosComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: { isNavHidden: true },
  },
  {
    path: '**',
    title: 'Not Found',
    component: NotFoundComponent,
    data: { isNavHidden: true },
  },
];
