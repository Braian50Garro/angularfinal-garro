import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscriptionActions } from './inscription.actions';
import { InscriptionService } from '../inscription.service';
import { UsersService } from '../../../../../core/services/users.service';
import { CursosService } from '../../cursos/cursos.services';


@Injectable()
export class InscriptionEffects {
loadMateria$ = createEffect(() => {
  return this.actions$.pipe(ofType(InscriptionActions.loadMaterias),

concatMap(() =>
  this.usersService.getAllMaterias().pipe(map((resp)=>
     InscriptionActions.loadMateriasSuccess({ data:resp})),
catchError((error) =>{
  return of (InscriptionActions.loadMateriasFailure({ error}));
})
)
)
);
});

loadCursos$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(InscriptionActions.loadCursos),
    concatMap(()=>{
      return this.cursosService.getCursos().pipe(
        map((resp) =>InscriptionActions.loadCursosSuccess({ data : resp})),
        catchError((error)=> of(InscriptionActions.loadCursosFailure({error}))) 
        );
      })
  );
});

createInscription$ = createEffect(() =>{
   return this.actions$.pipe(
      ofType(InscriptionActions.createInscription),
      concatMap((action) => {
        return this.inscriptionService.createInscription(action.data).pipe(
          map((resp) => InscriptionActions.createInscriptionSuccess({ data: resp })),
          catchError((error) => of(InscriptionActions.createInscriptionFailure({ error })))
        );
      })
    )
});
  
createInscriptionSuccess$=createEffect(() =>{
return this.actions$.pipe(
  ofType(InscriptionActions.createInscriptionSuccess),
  map(()=> InscriptionActions.loadInscriptions())
)}
)


constructor (
  private actions$: Actions , 
  private inscriptionService: InscriptionService,
  private usersService:UsersService,
  private cursosService:CursosService){}
}