import { Todo } from './todo/models/todo.model';
import { filtroReducer } from './filter/filter.reducer';
import { todoReducer } from './todo/todo.reducer';
import { filtrosValidos } from './filter/filtrosValidos';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos;
}

export const appReducers = {
    todos: todoReducer,
    filtro: filtroReducer
};

/*
// por alguna razon no está jalando con ActionReducerMap
export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
};*/