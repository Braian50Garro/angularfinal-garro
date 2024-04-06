import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscriptionData, Inscription } from '../model';
import { User } from '../../users/models';
import { Curso } from '../../cursos/models';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscription[]}>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
    'Load materias': emptyProps(),
    'Load materias Success': props<{ data: User[]}>(),
    'Load materias Failure': props<{ error: unknown }>(),
    'Load cursos': emptyProps(),
    'Load cursos Success': props<{ data: Curso[]}>(),
    'Load cursos Failure': props<{ error: unknown }>(),
    'create Inscription': props<{data:CreateInscriptionData}>(),
    'create Inscription Success': props<{ data: Inscription}>(),
    'create Inscription Failure': props<{ error: unknown }>(),

    }
});
