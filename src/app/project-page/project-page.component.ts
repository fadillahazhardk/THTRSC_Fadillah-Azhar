import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public bannerImage:any = 'assets/img/banner/home.jpg'
  public bannerTitle:any = 'Make Tracking Your Project Easier.';
  public bannerText:any = '';
  public isHome:any = true;

  public activeMenu:any = 'projectList';

  public projectList: Array<any> = [
    {
      id:1,
      nama: 'Membangun sesuatu yang dibangun',
      deskripsi: 'Harus bagus pokoknya gan!'
    },
    {
      id:2,
      nama: 'Membangun sesuatu yang dibangun',
      deskripsi: 'harus bagus'
    }
  ]

  updateProject($event: any) {
    let index = this.projectList.length - 1
    if (index < 0) {
      index = 0
    }
    this.projectList[index] === undefined ? $event.id = 1 : $event.id = this.projectList[index].id + 1;
    this.projectList = [...this.projectList, $event];
    this.activeMenu = 'projectList';
  }

  deleteProject($event: any) {
    this.projectList = this.projectList.filter(project => project.id != $event);
  }

  toForm(): void {this.activeMenu = 'projectForm'};

  toList(): void {this.activeMenu = 'projectList'};
}
