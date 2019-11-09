import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { select } from '@ngrx/store';

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

  @ViewChild('txtInputFisico', {static: false}) txtInputFisico: ElementRef;
  
  constructor() { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    // console.log(this.todo);
  }

  editar() {
    this.editando = true;
    setTimeout( () => this.txtInputFisico.nativeElement.select() , 1 );
  }

  terminarEdicion() {
    this.editando = false;
  }

}
