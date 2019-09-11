import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend-angular';

  constructor() {}

  ngOnInit() {}

  func() {
    console.log('Clicked ...');
  }
}
