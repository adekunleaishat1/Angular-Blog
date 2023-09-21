import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';



const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",component: SignupComponent},
  {path:"login",component: LoginComponent },
  {path:"navbar",component: NavbarComponent },
  {path:"dashboard",component: DashboardComponent},
  {path:"post",component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
