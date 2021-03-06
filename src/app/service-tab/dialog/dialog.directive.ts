import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDialogBorder]'
})
export class DialogDirective {

  @Input() input: string;

  constructor(private el: ElementRef) { }
  @HostListener('focus', ['$event.target']) onFocus(target) {
    target.style.borderColor = '#ffc107';
  }
  @HostListener('focusout', ['$event.target']) onFocusout(target) {
    target.style.borderColor = 'initial';
  }
}
