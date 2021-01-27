import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  //Terima data projects dari parent
  @Input() projects:any;

  //Digunakan untuk memberi tahu parent kalau ada project yang dihapus
  @Output() deleteProject = new EventEmitter();
  public projectId:any;


  constructor() { }

  ngOnInit(): void {
  }

  //Berfungsi untuk menghandle tombol delete project
  //Ia akan mengambil id dari project yang akan dihapus kemudian mengirimkan id tersebut ke parent,
  //untuk digunakan
  clickHandle($event: any) {
    this.projectId = $event.target.parentElement.parentElement.getAttribute('project');
    this.deleteProject.emit(this.projectId);
  }
}
