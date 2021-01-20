import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(event: Event) {
    this.activeTab = (event.target as HTMLElement).getAttribute('data-name')!;
    console.log(this.activeTab);
  }

  check(data: String) {
    return data === this.activeTab;
  }

}
