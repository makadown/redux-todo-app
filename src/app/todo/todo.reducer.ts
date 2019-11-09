// import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';
import { createReducer, on } from '@ngrx/store';
import { agregarTodo } from './todo.actions';

const estadoInicial: Todo[] = [];
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
  /* on(agregarTodo, (state, { payload }) =>  [...state, payload] ) */
  on(agregarTodo, (state, { payload }) => {
    const todos: Todo[] = [...state];
    todos.push(new Todo(payload));
    return todos;
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
