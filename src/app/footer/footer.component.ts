import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  name: string = "E-services, 2020";
  place: string = "Riga, Latvia";
  phone: string = "+371 29 831 905";
}
