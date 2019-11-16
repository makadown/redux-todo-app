import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { toggleTodo, editarTodo, borrarTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  chkField: FormControl;
  txtInput: FormControl;
  editando = false;

  @ViewChild('txtInputFisico', { static: false }) txtInputFisico: ElementRef;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    // console.log(this.todo);
    this.chkField.valueChanges.subscribe(() => {
      // console.log(valor);
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });
  }

  /**
   * Inicia edición de todo
   */
  editar() {
    this.editando = true;
    setTimeout(() => this.txtInputFisico.nativeElement.select(), 1);
  }
  /**
   * Terminar edición del todo
   */
  terminarEdicion() {
    this.editando = false;
    if (!this.txtInput.invalid && this.txtInput.value !== this.todo.texto) {
      this.store.dispatch(
        editarTodo({ id: this.todo.id, payload: this.txtInput.value })
      );
    }
  }
  /**
   * Elimina todo
   */
  borrarTodo() {
    this.store.dispatch(
      borrarTodo({ id: this.todo.id })
    );
  }
}
