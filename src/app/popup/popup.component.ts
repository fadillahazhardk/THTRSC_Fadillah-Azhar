import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  //Secara default popup akan muncul
  public show = true;

  public user:any = []

  constructor(private _userService: UserService) {}

  ngOnInit() {
    //Data user ini diambil dari service
    this.user = this._userService.user
  }

  //Fungsi untuk meng-close popup
  clickHandle() {
    this.show = false;
  }
}
