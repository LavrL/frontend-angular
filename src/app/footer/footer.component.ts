import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  count: number = 1;

  myfunc = () => {
    let abc: string = '2'
    return abc;
  }
}
