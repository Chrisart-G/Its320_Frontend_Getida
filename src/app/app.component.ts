import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DisplayqoutesComponent } from './displayqoutes/displayqoutes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent ,DisplayqoutesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
