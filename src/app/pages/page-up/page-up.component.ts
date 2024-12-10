import { Component } from '@angular/core';
import { CounterComponent } from "../../components/counter/counter.component";
import { CountService } from '../../services/count.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-page-up',
  templateUrl: './page-up.component.html',
  styleUrl: './page-up.component.scss',
  imports: [
    CounterComponent,
    AsyncPipe,
  ],
})
export class PageUpComponent {

  constructor(public countService: CountService) {}

  increment(): void {
    this.countService.increment();
  }

}
