import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public contents = [
    {
      data: 'projectList',
      view: 'Project List'
    },
    {
      data: 'createProjectForm',
      view: 'Create Project'
    },
    {
      data: 'contact',
      view: 'Contact'
    }
  ]

  public activeTab = 'projectList';

  public user:any = []

  constructor(public _userService: UserService) { }

  ngOnInit(): void {
    this.user = this._userService.user;
  }

  changeTab(event: Event) {
    this.activeTab = (event.target as HTMLElement).getAttribute('data-name')!;
    console.log(this.activeTab);
  }

  check(data: String) {
    return data === this.activeTab;
  }

}
