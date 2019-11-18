// import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';
import { createReducer, on } from '@ngrx/store';
import {
  agregarTodo,
  toggleTodo,
  editarTodo,
  borrarTodo,
  toggleAllTodo
} from './todo.actions';

// Para inicializar y evitar hacer pruebas manuales.
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Pedir prestado el traje a ironman');

todo3.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];
/*
export function todoReducer(state = estadoInicial,
    action: fromTodo.Acciones): Todo[] {
        switch(action.type) {
            case fromTodo.AGREGAR_TODO:
                const todo = new Todo(action.texto);
                return [...state, todo];
            default:
                state;
        }
    }
    */
const _todoReducer = createReducer(
  estadoInicial,
  on(agregarTodo, (state, { payload }) => [...state, new Todo(payload)]),
  on(toggleTodo, (state, { id }) => {
    return state.map(todoEdit => {
      if (todoEdit.id === id) {
        /* Auxiliandome del operador spread regreso un nuevo objeto de tipo Todo,
          clonando todas las propiedades y modificando explíciamente su propiedad de completado.
          */
        return {
          ...todoEdit,
          completado: !todoEdit.completado
        };
      } else {
        return todoEdit;
      }
    });
  }),
  on(toggleAllTodo, (state, { completado }) => {
    return state.map(todoEdit => {
      return {
        ...todoEdit,
        completado: completado
      };
    });
  }),
  on(editarTodo, (state, { id, payload }) => {
    return state.map(todoEdit => {
      if (todoEdit.id === id) {
        return {
          ...todoEdit,
          texto: payload
        };
      } else {
        return todoEdit;
      }
    });
  }),
  on(borrarTodo, (state, { id }) => {
    /* Tengo que regresar todo el arreglo del estado anterior, excluyendo el del id
        que voy a borrar */
    return state.filter(todoEdit => todoEdit.id !== id);
  })
);
/**
 * Funcion para reducer. Siguiendo instrucciones de
 * https://ngrx.io/guide/store
 * @param state
 * @param action
 */
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
