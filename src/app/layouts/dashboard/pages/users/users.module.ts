import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import { UsersFormComponent } from './components/users-form/users-form.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { SharedModule } from '../../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    SharedModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
  exports:[UsersComponent]
})
export class UsersModule { 

}
