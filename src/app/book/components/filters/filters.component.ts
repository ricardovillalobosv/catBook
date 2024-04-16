import { Component, Input, input } from '@angular/core';

interface ListFilter{
  id:number,
  name:string
}

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export default class FiltersComponent {


  public list:boolean=false
  public listFilters:ListFilter[]=[
    {id:1,name:'Género'},
    {id:1,name:'Páginas'},
    {id:1,name:'Autor'},
    {id:1,name:'Año'}
  ]
  public buttonOpen:boolean=true


  openListFilters():void{
    this.list=true
    this.buttonOpen=false
  }

  clouseListFilters():void{
    this.list=false
    this.buttonOpen=true
  }


}
