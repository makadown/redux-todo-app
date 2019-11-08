import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';

const estadoInicial: Todo[] = []

export function todoReducer(state = estadoInicial,
    action: fromTodo.Acciones): Todo[] {
        switch(action.type) {
            case fromTodo.AGREGAR_TODO:
                const todo = new Todo(action.texto);
                /* Aqui no se hace 
                  state.push(todo)
                  porque se estaría mutando el estado por referencia.
                  JAMAS se podran trackear los cambios en las acciones, 
                  siempre hay que regresar un nuevo arreglo que sirva de estado. */
                return [...state, todo];
            default:
                state;
        }
    }