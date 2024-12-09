import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent,  NavigationItem } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navItems: NavigationItem[] = [
    { title: 'Up', link: 'up' },
    { title: 'Down', link: 'down' },
    { title: 'Reset', link: 'reset' },
  ];
}
