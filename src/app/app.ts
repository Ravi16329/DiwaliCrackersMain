import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from './component1/component1';
import { Component2 } from './component2/component2';
import { Component3 } from './component3/component3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Component1 , Component2, Component3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'DiwaliCrackersMain';
}
