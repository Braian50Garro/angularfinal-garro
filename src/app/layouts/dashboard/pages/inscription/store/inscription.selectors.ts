import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscription from './inscription.reducer';


export const selectInscriptionState = createFeatureSelector<fromInscription.State>(
  fromInscription.inscriptionFeatureKey
);
export const selectInscription =createSelector (
  selectInscriptionState,
  (state) => state.inscription
);

export const selectInscriptionIsLoading = createSelector(
  selectInscriptionState,
  (state)=> state.loading
);
export const selectInscriptionMaterias = createSelector(
  selectInscriptionState,
  (state) => state.materias
);

export const selectInscriptionCursos = createSelector(
  selectInscriptionState,
  (state) =>state.cursos
);