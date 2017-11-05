import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {PicturesComponent} from './views/pictures/pictures.component';
import {Pictures20Component} from './views/pictures20/pictures20.component';
import {Pictures21Component} from './views/pictures21/pictures21.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'pictures',component:PicturesComponent},
  {path:'pictures20',component:Pictures20Component},
  {path:'pictures21',component:Pictures21Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
