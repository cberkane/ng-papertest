import { MatButtonModule } from '@angular/material/button';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  imports: [MatButtonModule],
})
export class CounterComponent {
  @Input() count: number;
  @Output() onCount = new EventEmitter<void>();
}
