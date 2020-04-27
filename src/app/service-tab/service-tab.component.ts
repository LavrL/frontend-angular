import { Component } from '@angular/core';

@Component({
  selector: 'app-service-tab',
  templateUrl: './service-tab.component.html',
  styleUrls: ['./service-tab.component.css']
})
export class ServiceTabComponent {
  showDialog: boolean = false;
  speed: number = 50;
  totalSpeed: number;
  channels: number = 54;
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

}
