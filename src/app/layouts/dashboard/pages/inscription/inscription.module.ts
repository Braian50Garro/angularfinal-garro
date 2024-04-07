import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription.component';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './store/inscription.effects';
import { StoreModule} from '@ngrx/store'
import {inscriptionFeature} from './store/inscription.reducer'
import { SharedModule } from '../../../../shared/shared.module';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';
import { CursosService } from '../cursos/cursos.services';



@NgModule({
  declarations: [
    InscriptionComponent,
    InscriptionDialogComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscriptionFeature),
    EffectsModule.forFeature([InscriptionEffects])
  ],
  providers:[CursosService,],
  
})
export class InscriptionModule { }
