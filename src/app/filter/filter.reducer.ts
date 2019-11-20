import { createReducer, on } from "@ngrx/store";
import { filtrosValidos } from "./filtrosValidos";
import { setFiltro } from "./filter.actions";

const estadoInicial: filtrosValidos = "todos";

const _filtroReducer = createReducer(
  estadoInicial,
  on(setFiltro, (state, filtro) => {
    return filtro? filtro : state;
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
