import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectPageComponent} from './project-page/project-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

//Route yang tersedia untuk project ini :
//Contoh url : localhost:4200/home
const routes: Routes = [
  {path: 'home', component: ProjectPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
