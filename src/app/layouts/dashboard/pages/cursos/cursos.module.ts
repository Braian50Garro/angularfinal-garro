import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CursosService} from './cursos.services';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';
import { CursosComponent } from './cursos.component';
 

@NgModule({
  declarations: [CursosComponent,
    CursoDialogComponent,
    
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
  
  ],
  providers:[CursosService],
})
export class CursosModule { 
 
}
