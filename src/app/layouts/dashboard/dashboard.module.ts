import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { SharedModule } from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { UsersModule } from './pages/users/users.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import {MatListModule} from '@angular/material/list'; 
import { adminGuard } from '../../core/guards/admin.guard';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    SharedModule,
    MatToolbarModule,
    UsersModule,
    MatListModule,
    RouterModule.forChild([
      {
        path:'home',
        component:HomeComponent,
      }, 
      {
      
        path:'users',
        canActivate:[adminGuard],
        loadChildren:() =>
        import('./pages/users/users.module').then((m) =>m.UsersModule),
      },
      {
        path:'cursos',
        loadChildren:()=>import('./pages/cursos/cursos.module').then(
          (m) =>m.CursosModule)
      },
      {
        path:'inscription',
        loadChildren:()=>
        import('./pages/inscription/inscription.module').then((m)=>m.InscriptionModule)
      },
     {
      path:'**',
      redirectTo:'home'
     },
    ]),

    
    


  ],
 exports:[DashboardComponent]
})
export class DashboardModule { }
