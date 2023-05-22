import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="flex align-middle justify-center">
    <h1 class="font-bold text-3xl">ToDo List</h1>
  </div>
  `
})

export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
