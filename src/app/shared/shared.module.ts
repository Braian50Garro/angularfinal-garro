import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from   '@angular/material/datepicker'; 
import { MatCardModule} from '@angular/material/card';
import { ValidationErrorsPipe } from './validation-errors.pipe'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 



@NgModule({
  declarations: [
    ValidationErrorsPipe
  ],
  imports: [CommonModule],
  exports:[MatButtonModule,
  MatIconModule, 
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatCardModule,
  ValidationErrorsPipe,
  MatProgressSpinnerModule,
  ],
})
export class SharedModule {}
