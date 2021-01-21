import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public show = true;

  public user:any = []

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.user = this._userService.user
  }

  clickHandle() {
    this.show = false;
  }
}
