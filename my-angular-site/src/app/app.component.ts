import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  template: `
    <!-- header -->
    <app-header></app-header>

    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  constructor() {}
}
