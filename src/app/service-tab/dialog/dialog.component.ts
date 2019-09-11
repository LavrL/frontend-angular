import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0,.0,.0'}))
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

  constructor() { }

  ngOnInit() {
  }
  close() {
    this.visible = false;
  }

}

