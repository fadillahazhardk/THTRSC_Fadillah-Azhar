import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent implements OnInit {
  public pollForm:any = {
    id: "",
    nama: "",
    deskripsi: ""
  }

  @Output() addNewProject = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  updateProjects($event: Event) {
    $event.preventDefault();
    this.addNewProject.emit(this.pollForm);
    this.pollForm = {
      id: "",
      nama: "",
      deskripsi: ""
    }
  }

}
