import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang = 'RU';

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
  onTranslate() {
    this.authService.doTranslate();
    this.lang = this.authService.lang;
  }
}
