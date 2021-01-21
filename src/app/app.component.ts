import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aksantara';

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
    this.projectList = [...this.projectList, $event]
  }

  deleteProject($event: any) {
    this.projectList = this.projectList.filter(project => project.id != $event);
  }
}
