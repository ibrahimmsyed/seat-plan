import { Component } from "@angular/core";

@Component({
  selector: "gf-main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor() {
    console.log("Hello World");
  }
}
