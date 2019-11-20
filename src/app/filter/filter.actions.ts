import { createAction, props } from '@ngrx/store';
import { filtrosValidos } from './filtrosValidos';

export const setFiltro = createAction('[Filter] Set filtro', props<{filtro: filtrosValidos}>());