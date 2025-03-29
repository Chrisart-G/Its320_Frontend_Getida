import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DisplayqoutesComponent } from './displayqoutes/displayqoutes.component';
import { TodolistComponent } from "./todolist/todolist.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, DisplayqoutesComponent, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
