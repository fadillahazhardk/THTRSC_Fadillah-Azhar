import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectPageComponent} from './project-page/project-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

const routes: Routes = [
  {path: '', component: ProjectPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
