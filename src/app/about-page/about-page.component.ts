import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public bannerImage:any = "assets/img/banner/about.jpg"
  public bannerTitle:any = "Misi kami membantu anda dan tim bekerja lebih efisien."
  public bannerText:any = "Project tracking terbaik abad ini"
}
