import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { ROUTES } from '../../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected routes: Routes = ROUTES.filter(
    (r) => !r.data || !r.data['isNavHidden']
  );
}
