import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() projects:any;

  @Output() deleteProject = new EventEmitter();

  public projectId:any;

  constructor() { }

  ngOnInit(): void {
  }

  clickHandle($event: any) {
    this.projectId = $event.target.parentElement.parentElement.getAttribute('project');
    this.deleteProject.emit(this.projectId);
  }
}
