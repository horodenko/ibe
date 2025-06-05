import { Component } from '@angular/core';
import { NavItems } from '../models/header.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected navItems: NavItems[] = [
    { path: '/home', label: 'Sobre a igreja' },
    { path: '/novidades-e-eventos', label: 'Novidades e Eventos' },
    { path: '/fale-conosco', label: 'Fale conosco' },
  ]
}
