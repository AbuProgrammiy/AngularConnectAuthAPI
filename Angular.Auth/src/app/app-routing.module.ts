import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLoginComponent } from './pages/register-login/register-login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"",component:RegisterLoginComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
