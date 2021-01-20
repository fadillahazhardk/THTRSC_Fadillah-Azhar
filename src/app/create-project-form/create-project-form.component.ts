import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent implements OnInit {
  public pollForm = {
    question: "",
    answerA: "",
    answerB: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
