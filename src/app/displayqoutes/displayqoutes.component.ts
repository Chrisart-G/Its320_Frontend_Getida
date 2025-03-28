import { Component } from '@angular/core';
import { QoutesService } from '../services/qoutes.service';
type Qoutes = {
  _id: string;
  author: string;
  title?: string;
  quotes: string;
  published: string;
};
@Component({
  selector: 'app-displayqoutes',
  imports: [],
  templateUrl: './displayqoutes.component.html',
  styleUrl: './displayqoutes.component.css'
})

export class DisplayqoutesComponent {
  constructor(private newQoutes: QoutesService){}
  
  qoutes: Qoutes[] = [];
  spec_author: string[] = ['Aristotle',''];
  async ngOnInit(){
    this.newQoutes.Get().subscribe(
      (qoutes: typeof  this.qoutes) =>{
        console.log(qoutes)
        return (this.qoutes = qoutes);
      }
    )
  }
  isspec_author(author: string): boolean {
    return this.spec_author.includes(author);
  }

}
