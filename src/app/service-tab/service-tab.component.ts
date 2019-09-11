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
      internetTitle: 'Оптический интернет',
      speed: 50,
      tvTitle: 'Аналоговое TV',
      channels: 54
    },
    {
      internetTitle: 'Оптический интернет',
      speed: 100,
      tvTitle: 'Аналоговое TV',
      channels: 108
    },
    {
      internetTitle: 'Оптический интернет',
      speed: 250,
      tvTitle: 'Аналоговое TV',
      channels: 162
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
