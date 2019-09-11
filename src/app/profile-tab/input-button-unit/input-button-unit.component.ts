import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input #inputElementRef
         placeholder="enter email">
  <button class="btn btn-warning option__btn-add" (click)="submitValue(inputElementRef.value)">Add</button>`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'lembersk@yahoo.com';
  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  submitValue(newTitle: string) {
    console.log('newTitle = ' + newTitle);
    this.submit.emit(newTitle);
  }
}
