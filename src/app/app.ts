import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from './component1/component1';
import { CrackersContent } from './crackers-content/crackers-content';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Component1 , CrackersContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'DiwaliCrackersMain';
}
