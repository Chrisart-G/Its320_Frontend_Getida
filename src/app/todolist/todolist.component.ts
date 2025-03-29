import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-todolist',
  imports: [ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
  
})

export class TodolistComponent {
  item = new FormControl('');
  list: string[] = [];

  pushTolist(){
   if (this){
    this.list.push(this.item.value as string);

    this.item.setValue('')
    return;

   }

  }

}
