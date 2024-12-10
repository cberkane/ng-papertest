import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { NavigationComponent, NavigationItem } from './components/navigation/navigation.component';
import { CountService } from './services/count.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NavigationComponent,
    NgClass,
    MatIconModule,
  ],
})
export class AppComponent {
  navItems: NavigationItem[] = [
    { title: 'Up', link: 'up' },
    { title: 'Down', link: 'down' },
    { title: 'Reset', link: 'reset' },
  ];

  constructor(public countService: CountService) {}
}
