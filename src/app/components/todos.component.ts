import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  selector: 'app-todos',
  template: ` <div>
    <form (submit)="addTodo()" class="w-full flex">
      <input
        type="text"
        name="inputTodo"
        placeholder="Enter todo and hit Enter"
        [(ngModel)]="inputTodo"
        class="input mx-auto m-3"
      />
    </form>
    <div
      class=" grid grid-flow-col m-2 text-white bg-slate-500 text-left justify-between p-3 text-lg {{
        item.completed ? 'line-through font-extralight  text-slate-400' : ''
      }}"
      *ngFor="let item of todos; let i = index"
    >
      <p>{{ i + 1 }}</p>
      <p>{{ item.content }}</p>
      <div>
        <button
          class="btn btn-success max-w-md min-w-xs"
          (click)="toggleDone(i)"
        >
          Done
        </button>
        <button
          class="btn btn-error max-w-md min-w-xs justify-center align-middle items-center"
          (click)="deleteTodo(i)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>`,
})
export class ToDosComponent implements OnInit {
  todos: Todo[] = [];

  inputTodo: string = '';
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        content: 'Haare waschen',
        completed: false,
      },
      {
        content: 'Boden wischen',
        completed: false,
      },
      {
        content: 'Wäsche machen',
        completed: false,
      },
      {
        content: 'Auto fahren',
        completed: true,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      return value;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((value, index) => index !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
