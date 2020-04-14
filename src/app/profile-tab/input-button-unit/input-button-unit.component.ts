import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <form [formGroup] = "inputForm" (ngSubmit)="submitValue(inputElementRef.value)" >
    <input #inputElementRef formControlName="email"
         placeholder="enter email">
    <button type="button" class="btn btn-warning option__btn-add"
          (click)="submitValue(inputElementRef.value)">Add</button>
          <span style="display: block; color: red; padding-top: 5px; padding-bottom: 5px;"
                *ngIf="!inputForm.get('email').valid && inputForm.get('email').touched"
                class="help-block">Invalid email structure!</span>
  </form>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'lembersk@yahoo.com';
  inputForm: FormGroup;
  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      email: new FormControl(null,
      [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])
    });
  }

  submitValue(newTitle: string) {
    if (this.inputForm.valid) {
      this.submit.emit(newTitle);
    }
  }
}
