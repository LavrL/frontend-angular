import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-tab',
  templateUrl: './service-tab.component.html',
  styleUrls: ['./service-tab.component.css']
})
export class ServiceTabComponent implements OnInit {
  showDialog = false;
  speed = 50;
  totalSpeed: number;
  channels = 54;
  totalChannels: number;
  constructor() { }

  ngOnInit() {
  }

}
