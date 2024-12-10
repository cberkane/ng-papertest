import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

export interface NavigationItem {
  title: string;
  link: string;
}

@Component({
  standalone: true,
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [RouterLink, RouterLinkActive, MatRippleModule],
})
export class NavigationComponent {
  @Input() items: NavigationItem[];
}
