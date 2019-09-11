import { Directive, Input, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDialogBorder]'
})
export class DialogDirective {

  @Input() input: string;

  constructor(private el: ElementRef) { }
  @HostListener('focus', ['$event.target']) onFocus(target) {
    target.style.borderColor = 'red';
    console.log(target.style.borderColor);
  }
  @HostListener('focusout', ['$event.target']) onFocusout(target) {
    target.style.borderColor = 'initial';
    console.log('target.style.borderColor');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  // @HostListener('mouseenter') onMouseEnter() {
  //   console.log('Enter');
  //   this.el.nativeElement.style.borderColor = 'red';
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   console.log('Leave');
  //   this.el.nativeElement.style.borderColor = 'white';
  // }

}
