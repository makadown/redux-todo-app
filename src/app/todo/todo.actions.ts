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
export const toggleAllTodo = createAction('[TODO] Toggle All todo', props<{completado: boolean}>());
export const editarTodo = createAction('[TODO] Editar todo', props<{id: number, payload: string}>());
export const borrarTodo = createAction('[TODO] Borrar Todo', props<{id: number}>());