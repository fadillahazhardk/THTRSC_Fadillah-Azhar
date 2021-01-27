import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aksantara';

  //Array daftar project akan ditampilakan di home page bagian "project list"
  //Dua object di dalam array project dibawah hanya sebagai starter
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
}
