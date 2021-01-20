import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  public projects = [
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


  constructor() { }

  ngOnInit(): void {
  }

}
