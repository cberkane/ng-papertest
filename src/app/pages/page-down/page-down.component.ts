import { Component } from '@angular/core';
import { CounterComponent } from "./../../components/counter/counter.component";

@Component({
  selector: 'app-page-down',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './page-down.component.html',
  styleUrl: './page-down.component.scss'
})
export class PageDownComponent {

}
