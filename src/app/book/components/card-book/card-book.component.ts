
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-card-book',
  standalone: true,
  imports: [CommonModule,LoaderComponent],
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css'
})
export class CardBookComponent {

  @Input() genderBook:string[]|undefined=[]
  @Input() imgBook:string=''
  @Input() title:string=''
  @Input() publishedDate:string |undefined=''
  @Input() authors:string[]| undefined=[]
  @Input() language:string=''

}
