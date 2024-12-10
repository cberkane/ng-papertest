import { Component } from '@angular/core';
import { CounterComponent } from './../../components/counter/counter.component';
import { CountService } from '../../services/count.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-page-down',
  templateUrl: './page-down.component.html',
  styleUrl: './page-down.component.scss',
  imports: [
    CounterComponent,
    AsyncPipe,
  ],
})
export class PageDownComponent {
  constructor(public countService: CountService) {}

  decrement(): void {
    this.countService.decrement();
  }
}
