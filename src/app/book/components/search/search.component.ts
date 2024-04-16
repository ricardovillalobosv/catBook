import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';

import { Subject, Subscription, debounceTime } from 'rxjs';




@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export default class SearchComponent implements OnInit, OnDestroy {

  public termInitial: string = ''
  /////////////////////////////
  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSuscription?: Subscription

  //////////////////////////////////
/*  @Output()
  public onValue = new EventEmitter<string>() */

  @Output()
  public onDebounce = new EventEmitter<string>()
  /////////////////////////////////


  constructor(){
    console.log(this.termInitial)
  }

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer //como este es un observable tebemos acceso a rxjs
      .pipe(
        debounceTime(300,)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }

  /////////////////////////////////Limpieza de la suscripcion

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }

  /////////////////////////////////

/*   emitValue(value: string): void {
    this.onValue.emit(value)
  } */

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }
}
