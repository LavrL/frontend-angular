import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {
  title = 'profile-test';
  open = false;
  width = 600;
  height = 100;
  full = false;
  addAddressClicked = false;

  emails = ['lembersk@yahoo.com', 'tco570@inbox.lv'];
  changeDivSize() {
    if (this.open) {
      this.height = 100;
      this.width = 600;
      this.open = false;
      this.full = false;
    } else {
      this.height = 400;
      this.width = 600;
      this.open = true;
      this.full = true;
    }
  }
  addAddress() {
    if (this.addAddressClicked) {
      this.addAddressClicked = false;
    } else {
      this.addAddressClicked = true;
    }
  }

}
