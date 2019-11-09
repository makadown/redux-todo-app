import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { agregarTodo } from '../todo.actions';
import { Todo } from '../models/todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if (!this.txtInput.valid) {
      return;
    }
    this.store.dispatch(agregarTodo({ payload: this.txtInput.value }));
    this.txtInput.setValue( null );
  }
}
