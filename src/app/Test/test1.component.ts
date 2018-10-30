import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
    <p class="demo">
      test1 works!
    </p>
  `,
  styles: [
    `
    .demo{
      background-color:red;
      color:white;
    }
    `
  ]
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
