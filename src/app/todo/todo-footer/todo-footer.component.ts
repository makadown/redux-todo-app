import { Component, OnInit } from '@angular/core';
import { filtrosValidos } from '../../filter/filtrosValidos';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { setFiltro } from '../../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { borrarTodoCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes = 0;

  filtrosValidos: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: filtrosValidos) {
    this.store.dispatch( setFiltro( { filtro: nuevoFiltro } ) );
  }

  contarPendientes(todos: Todo[]) {
      this.pendientes = todos.filter(todo => !todo.completado).length;
  }
  borrarTodo() {
    this.store.dispatch( borrarTodoCompletados() );
  }
}
