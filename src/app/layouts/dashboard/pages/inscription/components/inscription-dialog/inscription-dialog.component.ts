import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../../store/inscription.actions';
import { Observable } from 'rxjs';
import { User } from '../../../users/models';
import {  selectInscriptionCursos, selectInscriptionMaterias } from '../../store/inscription.selectors';
import { Curso } from '../../../cursos/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrl: './inscription-dialog.component.scss'
})
export class InscriptionDialogComponent {

materias$:Observable<User[]>;
cursos$:Observable<Curso[]>;

inscriptionForm:FormGroup;

  constructor(private store:Store, 
    private formBuilder:FormBuilder,
    private matDialogRef: MatDialogRef<InscriptionDialogComponent>){
    this.inscriptionForm =this.formBuilder.group({
      cursoId :this.formBuilder.control('',Validators.required),
      userId:this.formBuilder.control('',Validators.required),
    })
    
    this.store.dispatch(InscriptionActions.loadMaterias());
    this.store.dispatch(InscriptionActions.loadCursos());
    
    this.materias$ = this.store.select(selectInscriptionMaterias);
   this.cursos$ = this.store.select(selectInscriptionCursos);
  }

  onSubmit():void{
    if (this.inscriptionForm.invalid){
      this.inscriptionForm.markAllAsTouched();
    }else{
      this.store.dispatch(InscriptionActions.createInscription({data:this.inscriptionForm.value})
    );
    this.matDialogRef.close();
    }
  }

}
