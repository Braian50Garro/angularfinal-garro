import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {


  constructor(private store:Store, private matDialog:MatDialog){
  
}
createInscription():void{
  this.matDialog.open(InscriptionDialogComponent)
}
}
