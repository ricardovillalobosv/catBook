import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-books',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu-books.component.html',
  styleUrl: './menu-books.component.css'
})
export class MenuBooksComponent {

  public menuBooks=routes
    .map((route)=>route.children??[])
    .flat()
    .filter((route)=>route && route.path)
}
