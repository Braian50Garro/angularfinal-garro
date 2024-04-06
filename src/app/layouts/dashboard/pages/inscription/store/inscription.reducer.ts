import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { Inscription } from '../model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { User } from '../../users/models';
import { Curso } from '../../cursos/models';

export const inscriptionFeatureKey = 'inscription';


export interface State {
 inscription : Inscription[];
 materias:User[];
 cursos:Curso[];
 loading:boolean;
 loadingMaterias:boolean;
 error: unknown;
 
};

export const initialState: State={
  inscription:[],
  materias:[],
  cursos:[],
  loading: false,
  loadingMaterias:false,
  error:null,
};

export const reducer = createReducer(
  initialState,
  on(InscriptionActions.loadInscriptions, (state) =>({...state, loading:true})),
  on(InscriptionActions.loadInscriptionsSuccess, (state, action) => ({...state,loading:false,sales:action.data})),
  on(InscriptionActions.loadInscriptionsFailure, (state, action) => state),

on(InscriptionActions.loadMaterias,(state)=>{
return {...state,loadingMaterias:true}
}),
on(InscriptionActions.loadMateriasSuccess,(state, action) =>{
  return {
    ...state,loadingMaterias:false,
    materias:action.data,
  }
}),
on(InscriptionActions.loadCursosSuccess,(state,action) => ({
  ...state,
  cursos:action.data,
}))
);


export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

