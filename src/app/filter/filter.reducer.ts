import { createReducer, on } from "@ngrx/store";
import { setFiltro } from "./filter.actions";
import { filtrosValidos } from './filtrosValidos';

const estadoInicial: filtrosValidos = "todos";

const _filtroReducer = createReducer(
  estadoInicial,
  on(setFiltro, (state, filtros) => {
    return filtros? filtros.filtro : 'todos';
  })
);

/**
 * Funcion para reducer. Siguiendo instrucciones de
 * https://ngrx.io/guide/store
 * @param state
 * @param action
 */
export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
