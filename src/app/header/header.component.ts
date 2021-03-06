import { AuthService } from '../../core/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lang = 'RU';

  constructor(public authService: AuthService) { }

  onLogout() {
    this.authService.logout();
  }
  
  onTranslate() {
    this.authService.doTranslate();
    this.lang = this.authService.lang;
  }
}
