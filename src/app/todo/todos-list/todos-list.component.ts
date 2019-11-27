import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../../filter/filtrosValidos';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit, OnDestroy {
  suscriptor: Subscription;
  todos: Todo[] = [];
  filtro: filtrosValidos;
  
  constructor(private store: Store<AppState>) {
      this.suscriptor = this.store.subscribe( state => {
        this.todos = state.todos;
        this.filtro = state.filtro;
        
        // console.log(this.todos);
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }
}
