import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import {authGuard} from './core/guards/auth.guard'


const routes: Routes = [
  {
    path:'dashboard',
    canActivate:[authGuard],
    component:DashboardComponent,
    loadChildren:()=>import('./layouts/dashboard/dashboard.module').then(
      (m) => m.DashboardModule)
  },
  //{
  //  path:'auth/login',
   // component:LoginComponent
  //},
  {
    path:'auth',
    loadChildren:() =>
    import('./layouts/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'/auth/login'

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
