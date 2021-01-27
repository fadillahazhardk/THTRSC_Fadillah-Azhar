import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent implements OnInit {
  //Template awal dari project yang akan dibuat
  public pollForm:any = {
    id: "",
    nama: "",
    deskripsi: ""
  }

  //Mengirimkan data project yang baru dibuat ke parent untuk mengupdate array daftar project
  @Output() addNewProject = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  //Menghandle tombol create project. Ia akan mengirim data ke parent dan mereset tampilan form menjadi semula.
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
