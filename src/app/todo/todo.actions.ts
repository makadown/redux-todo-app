import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

/* import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {

    }
}

export type Acciones = AgregarTodoAction;*/
export const agregarTodo = createAction('[TODO] Agregar todo', props<{payload: string}>());
export const toggleTodo = createAction('[TODO] Toggle todo', props<{id: number}>());