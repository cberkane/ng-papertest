import { Component } from '@angular/core';
import { CounterComponent } from "../../components/counter/counter.component";

@Component({
  selector: 'app-page-up',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './page-up.component.html',
  styleUrl: './page-up.component.scss'
})
export class PageUpComponent {

}
