import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0,.0,.0' }))
      ])
    ]
    )
  ]
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() speedDialog: number;
  @Input() channelDialog: number;

  inputForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*(?:(?:\d[ -]?){1,12}))\d(?:[0-9 -]*\d)?$/)])
    });
  }
  close() {
    this.visible = false;
  }

}

