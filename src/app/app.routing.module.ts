import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgregarComponent } from "./agregar/agregar.component";
import { EditarComponent } from "./editar/editar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
const routes: Routes  = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'editar', component: EditarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
