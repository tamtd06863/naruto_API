import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dragonBall';
}
