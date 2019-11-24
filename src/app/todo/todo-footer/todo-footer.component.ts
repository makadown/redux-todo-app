import { Component, OnInit } from '@angular/core';
import { filtrosValidos } from '../../filter/filtrosValidos';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { setFiltro } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      // console.log(state.filtro);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: filtrosValidos) {
    this.store.dispatch( setFiltro( { filtro: nuevoFiltro } ) );
  }

}
