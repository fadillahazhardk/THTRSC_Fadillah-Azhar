import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public contactImage:any = "assets/img/banner/contact.jpg"
  public bannerTitle:any = "Kami ingin mendengar mu"
  public bannerText:any = "Kami di sini untuk mu. Jika ada pertanyakan, silahkan!"

}
