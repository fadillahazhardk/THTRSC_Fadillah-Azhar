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
  //Data banner untuk komponen project-page
  public bannerImage:any = 'assets/img/banner/home.jpg'
  public bannerTitle:any = 'Make Tracking Your Project Easier.';
  public bannerText:any = '';
  public isHome:any = true;

  //Defaultnya, tab project list akan tampil
  public activeMenu:any = 'projectList';

  //Daftar Project yang akan ditampiilkan
  public projectList: Array<any> = [
    {
      id:1,
      nama: 'Website olshop sepatu "BangJago"',
      deskripsi: 'Membangun website dengan arsitektur MERN. Butuh sekitar 3 orang yang mengerjakan, deadline besok.'
    },
    {
      id:2,
      nama: 'Applikasi mobile perusahaan cupang',
      deskripsi: 'Applikasi harus menggunakan matlab ya, pokoknya pake matlab! harus bisa. Deadline 2 minggu lagi.'
    },
    {
      id:3,
      nama: 'Desain poster taman kanak kanak cendikia lansia',
      deskripsi: 'Dibutuhkan dua orang yang jago ngulek sambel, ga harus bisa power point, yang penting posternya jadi besok'
    }
  ]

  //Ketika project form tersubmit, fungsi ini akan berjalan untuk meng-update daftar project
  updateProject($event: any) {
    let index = this.projectList.length - 1
    if (index < 0) {
      index = 0
    }
    this.projectList[index] === undefined ? $event.id = 1 : $event.id = this.projectList[index].id + 1;
    this.projectList = [...this.projectList, $event];
    this.activeMenu = 'projectList';
  }

  //Menghapus project pada tabel project list
  deleteProject($event: any) {
    this.projectList = this.projectList.filter(project => project.id != $event);
  }

  //Berfungsi untuk merubah-rubah antara tab project-form dan project-list
  toForm(): void {this.activeMenu = 'projectList'};
  toList(): void {this.activeMenu = 'projectForm'};
}
