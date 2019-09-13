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

  services = [
    {
      internetTitle: 'Optical internet',
      speed: 50,
      tvTitle: 'Analog TV',
      channels: 54
    },
    {
      internetTitle: 'Optical internet',
      speed: 100,
      tvTitle: 'Analog TV',
      channels: 108
    },
    {
      internetTitle: 'Optical internet',
      speed: 250,
      tvTitle: 'Analog TV',
      channels: 162
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
