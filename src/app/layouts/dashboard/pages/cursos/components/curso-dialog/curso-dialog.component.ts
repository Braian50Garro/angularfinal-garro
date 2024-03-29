import { Component, Inject } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../models';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent {
  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCurso?:Curso,
  ) {
    this.cursoForm = this.fb.group({
      fullName: this.fb.control('',[Validators.required, Validators.minLength(5)]),
      curseName: this.fb.control('',Validators.required),
      createdAt: this.fb.control('',Validators.required),
    });
  

  if (editingCurso) {
    this.cursoForm.patchValue(editingCurso);
  }
  }

  onSave(): void {
    this.dialogRef.close(this.cursoForm.value);
  }
}
